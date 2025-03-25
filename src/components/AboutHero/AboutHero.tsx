import styles from "./AboutHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import Img1 from "../../../public/images/glass2.png";

export default function AboutHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h1 className={styles.heading}>About Us</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionHeadingContainer}>
              <SectionHeading number='1' />
            </div>
            <h2 className={styles.headingii}>
              I bring years of experience building & shaping brands with a
              steady hand of creativity, vision and counsel.
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
