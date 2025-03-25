"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./CustomCursor.module.css"; // your existing CSS

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Check if device supports fine pointer (mouse).
    const canHover = window.matchMedia("(pointer: fine)").matches;
    if (!canHover) return;
    // If `pointer` is coarse (touchscreen), skip the custom cursor logic.

    function handleMove(e: MouseEvent) {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef} />;
}
