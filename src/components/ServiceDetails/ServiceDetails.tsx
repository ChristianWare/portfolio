"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServiceDetails.module.css";

const data = [
  {
    title: "Next.js",
    description:
      "A React framework for building fast, full-stack web applications with server-side rendering.",
  },
  {
    title: "React",
    description:
      "A JavaScript library for building user interfaces using reusable components.",
  },
  {
    title: "HTML",
    description:
      "The standard markup language used to create and structure content on the web.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    title: "CSS",
    description:
      "A stylesheet language used to describe the presentation and layout of HTML elements.",
  },
  {
    title: "Javascript",
    description:
      "A programming language that adds interactivity and logic to web pages.",
  },
  {
    title: "Node.js",
    company: "",
    description:
      "A JavaScript runtime built on Chrome’s V8 engine that allows server-side scripting.",
  },
];

export default function ServiceDetails() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div className={styles.card} key={index}>
              {x.icon && <div className={styles.iconContainer}>{x.icon}</div>}
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
}
