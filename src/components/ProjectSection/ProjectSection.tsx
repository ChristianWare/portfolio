import styles from "./ProjectSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import WorkSection from "../WorkSection/WorkSection";

export default function ProjectSection() {
  return (
    <section className={styles.container} id='experience'>
      <LayoutWrapper>
        <SectionHeading2 title='Work Experience' />

        <div className={styles.content}>
          <div className={styles.left}>
            {/* <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./videos/glass6.mp4' />
            </video> */}
          </div>
          <div className={styles.right}>
            <WorkSection />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
