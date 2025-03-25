"use client";

import styles from "./Explain.module.css";
import { useEffect, useRef } from "react";
import LayoutWrapper from "../LayoutWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// import SectionHeading from "../SectionHeading/SectionHeading";

export default function Explain() {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef(): [
    React.MutableRefObject<HTMLSpanElement[]>,
    (ref: HTMLSpanElement) => void
  ] {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "Because of my background in design, and finance, I understand the aesthetic and business side to any project.";

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 0.5,
        start: "top center",
        end: "bottom center",
        markers: false,
      },
    });

    lettersRef.current.forEach((letter, index) => {
      tl.to(
        letter,
        {
          color: "#ff4d00",
          duration: 0.2,
        },
        index * 0.015
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [lettersRef]);

  return (
    <section className={styles.container} ref={triggerRef}>
      <LayoutWrapper>
        {/* <SectionHeading number='1' title='About Us' /> */}

        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              {text.split("").map((letter, index) => (
                <span
                  key={index}
                  className={styles.revealText}
                  ref={setLettersRef}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <h1 className={styles.headingii}>
              Because of my background in design, and finance, I understand the
              aesthetic and business side to any project.
            </h1>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div> */}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
