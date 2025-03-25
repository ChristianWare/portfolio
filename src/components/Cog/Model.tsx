"use client";

// import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useEffect } from "react";

export interface ModelProps {
  thickness: number;
  roughness: number;
  transmission: number;
  ior: number;
  chromaticAberration: number;
  backside: boolean;
  useViewportScale?: boolean;
  fixedScale?: [number, number, number];
}

export default function Model({
  thickness,
  roughness,
  transmission,
  ior,
  chromaticAberration,
  backside,
  useViewportScale = false,
  fixedScale = [3, 3, 3],
}: ModelProps) {
  const mesh = useRef<THREE.Mesh | null>(null);
  const { nodes } = useGLTF("/3dFiles/cog.glb");
  const { viewport } = useThree();
  const scrollDelta = useRef(0);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - prevScrollY.current;
      scrollDelta.current += delta;
      prevScrollY.current = currentScrollY;

       if (delta > 0) {
         scrollDelta.current += delta;
       }

       prevScrollY.current = currentScrollY;
    };

    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply scroll-based rotation
  useFrame(() => {
    if (!mesh.current) return;

    // Convert scroll delta to rotation (adjust 0.0002 for speed)
    mesh.current.rotation.z += scrollDelta.current * 0.002;

    // Reset delta for next frame
    scrollDelta.current = 0;
  });

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.z += 0.01;
  });

  const groupScale = useViewportScale ? viewport.width / 4.5 : fixedScale;

  return (
    <>
      <group scale={groupScale}>
        <mesh ref={mesh} {...nodes.Cog_0}>
          <MeshTransmissionMaterial
            thickness={thickness}
            roughness={roughness}
            transmission={transmission}
            ior={ior}
            chromaticAberration={chromaticAberration}
            backside={backside}
          />
        </mesh>
      </group>
    </>
  );
}
