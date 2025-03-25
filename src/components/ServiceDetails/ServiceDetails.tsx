"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServiceDetails.module.css";

const data = [
  {
    title: "Next.js",
    description:
      "A React framework for building optimized full-stack web apps with server-side rendering and static site generation.",
  },
  {
    title: "React",
    description:
      "A JavaScript library for building dynamic user interfaces using a component-based architecture.",
  },
  {
    title: "HTML",
    description:
      "A markup language used for structuring and displaying content on the web.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    title: "CSS",
    description:
      "A stylesheet language used to control the layout, style, and visual presentation of HTML documents.",
  },
  {
    title: "Javascript",
    description:
      "A programming language used to create dynamic and interactive elements on websites.",
  },
  {
    title: "Node.js",
    company: "",
    description:
      "A runtime environment that allows you to run JavaScript on the server side.",
  },
  {
    title: "Mongo DB",
    description:
      "A NoSQL database that stores data in flexible, JSON-like documents.",
  },
  {
    title: "SQL",
    description:
      "A domain-specific language used to manage and query relational databases.",
  },
  {
    title: "Typescript",
    description:
      "A strongly typed superset of JavaScript that adds optional static typing to the language.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    title: "JWT",
    description:
      "A compact, URL-safe token format used for securely transmitting information between parties as a JSON object.",
  },
  {
    title: "Vercel",
    description:
      "A cloud platform for deploying and hosting frontend applications, especially optimized for Next.js.",
  },
  {
    title: "Google Analytics",
    company: "",
    description:
      "A web analytics tool that tracks and reports website traffic and user behavior.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
];


export default function ServiceDetails() {
  return (
    <div className={styles.container} id='techstack'>
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
