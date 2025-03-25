"use client";

import styles from "./Impressions.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";

import Img1 from "../../../public/images/glass2.png";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Cog from "../Cog/Cog";

gsap.registerPlugin(CustomEase, ScrollTrigger);

export default function Impressions() {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgContainerRef.current || !imageWrapperRef.current) return;

    // Create custom easing curve
    CustomEase.create(
      "hop",
      "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
    );

    // Set initial states
    gsap.set(imageWrapperRef.current, { scale: 2 });
    gsap.set(imgContainerRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    // Create animation timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgContainerRef.current,
        start: "top center", // When top of element hits center of viewport
        end: "bottom center",
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
        markers: false, // Set to false to remove debug markers
      },
    });

    tl.to(imgContainerRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "hop",
    }).to(
      imageWrapperRef.current,
      {
        scale: 1,
        duration: 1,
        ease: "power3.inOut",
      },
      0.15
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading number='1' title='First impressions matter' />
        <div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.heading}>
              In a world where decisions are made in a matter of seconds, you
              only get one shot.
            </h3>
            <div ref={imgContainerRef} className={styles.imgContainer}>
              {/* <div ref={imageWrapperRef} className={styles.imageWrapper}>
                <Image src={Img1} fill alt='' className={styles.img} />
              </div> */}
              <ParallaxImage src={Img1} alt='' />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.righContent}>
              <p className={styles.copy}>
                Whether you’re targeting investors, customers or users, you not
                only have to get to the point quickly, you have to give them a
                reason to believe you’re about to make their lives better, or at
                least make life itself better.
                <br />
                <br />
                Strong strategic core messaging is what lies behind that strong
                first impression.
              </p>
              <h3 className={styles.headingii}>
                It is also the foundation for whatever comes{" "}
                <span className={styles.highlight}>next</span>
              </h3>
              <h3 className={styles.headingiii}>
                we partner with ambitious founders and executive teams who want
                to stand out and go big.
              </h3>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
