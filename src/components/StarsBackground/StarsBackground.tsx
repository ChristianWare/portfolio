"use client";

import { useEffect, useRef } from "react";
import styles from "./StarsBackground.module.css";

// Define types for our classes and utility functions
type Position = {
  x: number;
  y: number;
};

type Settings = {
  particleCount: number;
  flareCount: number;
  motion: number;
  tilt: number;
  color: string;
  particleSizeBase: number;
  particleSizeMultiplier: number;
  flareSizeBase: number;
  flareSizeMultiplier: number;
  lineWidth: number;
  linkChance: number;
  linkLengthMin: number;
  linkLengthMax: number;
  linkOpacity: number;
  linkFade: number;
  linkSpeed: number;
  glareAngle: number;
  glareOpacityMultiplier: number;
  renderParticles: boolean;
  renderParticleGlare: boolean;
  renderFlares: boolean;
  renderLinks: boolean;
  renderMesh: boolean;
  flicker: boolean;
  flickerSmoothing: number;
  blurSize: number;
  orbitTilt: boolean;
  randomMotion: boolean;
  noiseLength: number;
  noiseStrength: number;
};

export default function StarsBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Make sure DOM is loaded
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Settings
    const settings: Settings = {
      particleCount: 40,
      flareCount: 10,
      motion: 0.05,
      tilt: 0.05,
      color: "#ff4d00", // Using your orange var
      particleSizeBase: 1,
      particleSizeMultiplier: 0.5,
      flareSizeBase: 100,
      flareSizeMultiplier: 100,
      lineWidth: 1,
      linkChance: 75,
      linkLengthMin: 5,
      linkLengthMax: 7,
      linkOpacity: 0.25,
      linkFade: 90,
      linkSpeed: 1,
      glareAngle: -60,
      glareOpacityMultiplier: 0.05,
      renderParticles: true,
      renderParticleGlare: true,
      renderFlares: true,
      renderLinks: true,
      renderMesh: false,
      flicker: true,
      flickerSmoothing: 15,
      blurSize: 0,
      orbitTilt: true,
      randomMotion: true,
      noiseLength: 1000,
      noiseStrength: 1,
    };

    // Animation variables
    let mouse: Position = { x: 0, y: 0 };
    let c = 1000; // multiplier for delaunay points
    let n = 0;
    let nAngle = (Math.PI * 2) / settings.noiseLength;
    let nRad = 100;
    let nPos: Position = { x: 0, y: 0 };
    let points: [number, number][] = [];
    let vertices: number[] = [];
    let triangles: number[][] = [];
    let links: Link[] = [];
    let particles: Particle[] = [];
    let flares: Flare[] = [];

    // Particle class
    class Particle {
      x: number;
      y: number;
      z: number;
      color: string;
      opacity: number;
      flicker: number;
      neighbors: number[];

      constructor() {
        this.x = random(-0.1, 1.1, true);
        this.y = random(-0.1, 1.1, true);
        this.z = random(0, 4);
        this.color = settings.color;
        this.opacity = random(0.1, 1, true);
        this.flicker = 0;
        this.neighbors = []; // placeholder for neighbors
      }

      render(): void {
        const pos = position(this.x, this.y, this.z);
        const r =
          (this.z * settings.particleSizeMultiplier +
            settings.particleSizeBase) *
          (sizeRatio() / 1000);
        let o = this.opacity;

        if (settings.flicker) {
          const newVal = random(-0.5, 0.5, true);
          this.flicker += (newVal - this.flicker) / settings.flickerSmoothing;
          if (this.flicker > 0.5) this.flicker = 0.5;
          if (this.flicker < -0.5) this.flicker = -0.5;
          o += this.flicker;
          if (o > 1) o = 1;
          if (o < 0) o = 0;
        }

        context.fillStyle = this.color;
        context.globalAlpha = o;
        context.beginPath();
        context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false);
        context.fill();
        context.closePath();

        if (settings.renderParticleGlare) {
          context.globalAlpha = o * settings.glareOpacityMultiplier;
          context.beginPath();
          context.ellipse(
            pos.x,
            pos.y,
            r * 100,
            r,
            (settings.glareAngle -
              (nPos.x - 0.5) * settings.noiseStrength * settings.motion) *
              (Math.PI / 180),
            0,
            2 * Math.PI,
            false
          );
          context.fill();
          context.closePath();
        }

        context.globalAlpha = 1;
      }
    }

    // Flare class
    class Flare {
      x: number;
      y: number;
      z: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = random(-0.25, 1.25, true);
        this.y = random(-0.25, 1.25, true);
        this.z = random(0, 2);
        this.color = settings.color;
        this.opacity = random(0.001, 0.01, true);
      }

      render(): void {
        const pos = position(this.x, this.y, this.z);
        const r =
          (this.z * settings.flareSizeMultiplier + settings.flareSizeBase) *
          (sizeRatio() / 1000);

        context.beginPath();
        context.globalAlpha = this.opacity;
        context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
        context.globalAlpha = 1;
      }
    }

    // Link class
    class Link {
      length: number;
      verts: number[];
      stage: number;
      linked: number[];
      distances: number[];
      traveled: number;
      fade: number;
      finished: boolean;

      constructor(startVertex: number, numPoints: number) {
        this.length = numPoints;
        this.verts = [startVertex];
        this.stage = 0;
        this.linked = [startVertex];
        this.distances = [];
        this.traveled = 0;
        this.fade = 0;
        this.finished = false;
      }

      render(): void {
        let i: number, p: Particle, pos: Position, points: [number, number][];

        switch (this.stage) {
          // VERTEX COLLECTION STAGE
          case 0:
            // Grab the last member of the link
            const lastIndex = this.verts[this.verts.length - 1];
            const last = particles[lastIndex];

            if (last && last.neighbors && last.neighbors.length > 0) {
              // Grab a random neighbor
              const neighborIndex = random(0, last.neighbors.length - 1);
              const neighbor = last.neighbors[neighborIndex];
              // If we haven't seen that particle before, add it to the link
              if (this.verts.indexOf(neighbor) === -1) {
                this.verts.push(neighbor);
              }
            } else {
              this.stage = 3;
              this.finished = true;
            }

            if (this.verts.length >= this.length) {
              // Calculate all distances at once
              for (i = 0; i < this.verts.length - 1; i++) {
                const p1 = particles[this.verts[i]];
                const p2 = particles[this.verts[i + 1]];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                this.distances.push(dist);
              }
              this.stage = 1;
            }
            break;

          // RENDER LINE ANIMATION STAGE
          case 1:
            if (this.distances.length > 0) {
              points = [];

              // Gather all points already linked
              for (i = 0; i < this.linked.length; i++) {
                p = particles[this.linked[i]];
                pos = position(p.x, p.y, p.z);
                points.push([pos.x, pos.y]);
              }

              const linkSpeedRel = settings.linkSpeed * 0.00001 * canvas.width;
              this.traveled += linkSpeedRel;
              const d = this.distances[this.linked.length - 1];

              // Calculate last point based on linkSpeed and distance travelled to next point
              if (this.traveled >= d) {
                this.traveled = 0;
                this.linked.push(this.verts[this.linked.length]);
                p = particles[this.linked[this.linked.length - 1]];
                pos = position(p.x, p.y, p.z);
                points.push([pos.x, pos.y]);

                if (this.linked.length >= this.verts.length) {
                  this.stage = 2;
                }
              } else {
                // We're still travelling to the next point, get coordinates at travel distance
                const a = particles[this.linked[this.linked.length - 1]];
                const b = particles[this.verts[this.linked.length]];
                const t = d - this.traveled;
                const x = (this.traveled * b.x + t * a.x) / d;
                const y = (this.traveled * b.y + t * a.y) / d;
                const z = (this.traveled * b.z + t * a.z) / d;

                pos = position(x, y, z);
                points.push([pos.x, pos.y]);
              }

              this.drawLine(points);
            } else {
              this.stage = 3;
              this.finished = true;
            }
            break;

          // FADE OUT STAGE
          case 2:
            if (this.verts.length > 1) {
              if (this.fade < settings.linkFade) {
                this.fade++;

                // Render full link between all vertices and fade over time
                points = [];
                const alpha =
                  (1 - this.fade / settings.linkFade) * settings.linkOpacity;

                for (i = 0; i < this.verts.length; i++) {
                  p = particles[this.verts[i]];
                  pos = position(p.x, p.y, p.z);
                  points.push([pos.x, pos.y]);
                }

                this.drawLine(points, alpha);
              } else {
                this.stage = 3;
                this.finished = true;
              }
            } else {
              this.stage = 3;
              this.finished = true;
            }
            break;

          // FINISHED STAGE
          case 3:
          default:
            this.finished = true;
            break;
        }
      }

      drawLine(points: [number, number][], alpha?: number): void {
        if (typeof alpha !== "number") alpha = settings.linkOpacity;

        if (points.length > 1 && alpha > 0) {
          context.globalAlpha = alpha;
          context.beginPath();

          for (let i = 0; i < points.length - 1; i++) {
            context.moveTo(points[i][0], points[i][1]);
            context.lineTo(points[i + 1][0], points[i + 1][1]);
          }

          context.strokeStyle = settings.color;
          context.lineWidth = settings.lineWidth;
          context.stroke();
          context.closePath();
          context.globalAlpha = 1;
        }
      }
    }

    // Utility functions
    function position(x: number, y: number, z: number): Position {
      return {
        x:
          x * width +
          (width / 2 - mouse.x + (nPos.x - 0.5) * settings.noiseStrength) *
            z *
            settings.motion,
        y:
          y * height +
          (height / 2 - mouse.y + (nPos.y - 0.5) * settings.noiseStrength) *
            z *
            settings.motion,
      };
    }

    function sizeRatio(): number {
      return width >= height ? width : height;
    }

    function random(min: number, max: number, float?: boolean): number {
      return float
        ? Math.random() * (max - min) + min
        : Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function noisePoint(i: number): Position {
      const a = nAngle * i;
      const cosA = Math.cos(a);
      const sinA = Math.sin(a);
      const rad = nRad;

      return {
        x: rad * cosA,
        y: rad * sinA,
      };
    }

    // Simple triangulation for our needs
    function createTriangles(): void {
      // Create some basic connections between particles
      triangles = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length && j < i + 5; j++) {
          for (let k = j + 1; k < particles.length && k < i + 10; k++) {
            // Only create a limited number of triangles to avoid excessive calculations
            if (triangles.length < 300) {
              triangles.push([i, j, k]);
            }
          }
        }
      }

      // Convert triangles to vertices for rendering
      vertices = [];
      triangles.forEach((tri) => {
        vertices.push(tri[0], tri[1], tri[2]);
      });
    }

    // Initialize
    function init(): void {
      // Set canvas size
      resize();

      // Add resize event listener
      window.addEventListener("resize", resize);

      // Set initial mouse position
      mouse.x = width / 2;
      mouse.y = height / 2;

      // Add mouse move listener
      document.addEventListener("mousemove", function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      // Create particle positions
      for (let i = 0; i < settings.particleCount; i++) {
        const p = new Particle();
        particles.push(p);
        points.push([p.x * c, p.y * c]);
      }

      // Create triangles for connecting particles
      createTriangles();

      // Tell all the particles who their neighbors are
      for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < triangles.length; j++) {
          const k = triangles[j].indexOf(i);
          if (k !== -1) {
            triangles[j].forEach((vertexIndex) => {
              if (
                vertexIndex !== i &&
                particles[i].neighbors.indexOf(vertexIndex) === -1
              ) {
                particles[i].neighbors.push(vertexIndex);
              }
            });
          }
        }
      }

      // Create flares
      if (settings.renderFlares) {
        for (let i = 0; i < settings.flareCount; i++) {
          flares.push(new Flare());
        }
      }

      // Start animation loop
      requestAnimationFrame(animate);
    }

    // Animation loop
    function animate(): void {
      requestAnimationFrame(animate);
      render();
    }

    // Render function
    function render(): void {
      if (settings.randomMotion) {
        n++;
        if (n >= settings.noiseLength) {
          n = 0;
        }

        nPos = noisePoint(n);
      }

      // Clear
      context.clearRect(0, 0, width, height);

      if (settings.blurSize > 0) {
        context.shadowBlur = settings.blurSize;
        context.shadowColor = settings.color;
      }

      if (settings.renderParticles) {
        // Render particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].render();
        }
      }

      if (settings.renderMesh) {
        // Render all lines
        context.beginPath();
        for (let v = 0; v < vertices.length - 1; v++) {
          // Splits the array into triplets
          if ((v + 1) % 3 === 0) {
            continue;
          }

          const p1 = particles[vertices[v]];
          const p2 = particles[vertices[v + 1]];

          const pos1 = position(p1.x, p1.y, p1.z);
          const pos2 = position(p2.x, p2.y, p2.z);

          context.moveTo(pos1.x, pos1.y);
          context.lineTo(pos2.x, pos2.y);
        }
        context.strokeStyle = settings.color;
        context.lineWidth = settings.lineWidth;
        context.stroke();
        context.closePath();
      }

      if (settings.renderLinks) {
        // Possibly start a new link
        if (random(0, settings.linkChance) === settings.linkChance) {
          const length = random(settings.linkLengthMin, settings.linkLengthMax);
          const start = random(0, particles.length - 1);
          links.push(new Link(start, length));
        }

        // Render existing links
        // Iterate in reverse so that removing items doesn't affect the loop
        for (let l = links.length - 1; l >= 0; l--) {
          if (links[l] && !links[l].finished) {
            links[l].render();
          } else {
            links.splice(l, 1);
          }
        }
      }

      if (settings.renderFlares) {
        // Render flares
        for (let j = 0; j < flares.length; j++) {
          flares[j].render();
        }
      }
    }

    function resize(): void {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    }

    function startLink(vertex: number, length: number): void {
      links.push(new Link(vertex, length));
    }

    // Initialize and clean up
    init();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.stars} />;
}
