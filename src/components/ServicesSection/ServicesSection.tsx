"use client";

import styles from "./ServicesSection.module.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  { id: 1, title: "2:" },
  { id: 2, title: "My" },
  { id: 3, title: "Tech" },
  { id: 4, title: "Stack:" },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray<HTMLDivElement>(
      `.${styles.card}`,
      container
    );

    cards.forEach((card, i) => {
      if (i === 0) return;

      gsap.fromTo(
        card,
        { marginTop: 0 },
        {
          marginTop: "-150px",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      {cardsData.map((card, index) => (
        <Card key={card.id} title={card.title} index={index} />
      ))}
    </section>
  );
}

interface CardProps {
  title: string;
  index: number;
}

function Card({ title, index }: CardProps) {
  return (
    <div className={`${styles.card} ${styles["card" + (index + 1)]}`}>
      <div className={styles.cardInner}>
        <div className={styles.cardContent}>
          <h2 className={styles.titleHeading}>{title}</h2>
          <div className={styles.blackDot}></div>
        </div>
      </div>
    </div>
  );
}
