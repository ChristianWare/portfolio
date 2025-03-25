import LayoutWrapper from "../LayoutWrapper";
import styles from "./ProjectSection3d.module.css";
import Cog from "../Cog/Cog";

export default function ProjectSection3d() {
  return (
    <section className={styles.container}>
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.box}>
              <div className={styles.sceneContainer}>
                <Cog useViewportScale={false} fixedScale={[1.5, 1.5, 1.5]} />
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </section>
  );
}
