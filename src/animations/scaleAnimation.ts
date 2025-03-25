/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useEffect } from "react";

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create(
  "hop",
  "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
);

interface ScaleAnimationOptions {
  start?: string;
  end?: string;
  scrub?: number | boolean;
  scaleFrom?: number;
  scaleTo?: number;
  clipPathFrom?: string;
  clipPathTo?: string;
  duration?: number;
  ease?: string;
}

export const useScaleAnimation = (
  containerRef: RefObject<HTMLElement | null>,
  imageWrapperRef: RefObject<HTMLElement | null>,
  options: ScaleAnimationOptions = {}
) => {
  const mergedOptions = {
    start: "top center",
    end: "+=500", // Controls scroll distance for animation
    scrub: 1, // Smooth scrubbing with 1 second lag
    scaleFrom: 2,
    scaleTo: 1,
    clipPathFrom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    clipPathTo: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    duration: 2, // Total animation duration in seconds
    ease: "hop",
    ...options,
  };

  useEffect(() => {
    if (!containerRef.current || !imageWrapperRef.current) return;

    // Set initial states
    gsap.set(imageWrapperRef.current, { scale: mergedOptions.scaleFrom });
    gsap.set(containerRef.current, {
      clipPath: mergedOptions.clipPathFrom,
      willChange: "clip-path", // Optimize for animation
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: mergedOptions.start,
        end: mergedOptions.end,
        scrub: mergedOptions.scrub,
        markers: false,
        invalidateOnRefresh: true, // Ensures proper resizing
      },
    });

    // Clip-path animation (2 seconds)
    tl.to(containerRef.current, {
      clipPath: mergedOptions.clipPathTo,
      duration: mergedOptions.duration,
      ease: mergedOptions.ease,
    });

    // Scale animation (slightly longer at 2.25 seconds)
    tl.to(
      imageWrapperRef.current,
      {
        scale: mergedOptions.scaleTo,
        duration: mergedOptions.duration * 1.125, // 2.25s
        ease: "power3.inOut",
      },
      "-=0.15"
    ); // Start 0.15s before clip-path ends

    return () => {
      gsap.killTweensOf([containerRef.current, imageWrapperRef.current]);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef, imageWrapperRef, mergedOptions]);
};
