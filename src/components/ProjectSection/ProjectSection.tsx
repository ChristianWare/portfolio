import styles from "./ProjectSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";

const projectData = [
  { id: 1, title: "Project Name 1" },
  { id: 2, title: "Project Name 2" },
  { id: 3, title: "Project Name 3" },
  { id: 4, title: "Project Name 4" },
  { id: 5, title: "Project Name 5" },
  { id: 6, title: "Project Name 6" },
];

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading2 title='Projects' />

        <div className={styles.content}>
          <div className={styles.left}>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./videos/glass6.mp4' />
            </video>
          </div>
          <div className={styles.right}>
            <span className={styles.clients}>Clients (2013-2025)</span>
            <div className={styles.projectDataContainer}>
              {projectData.map((x) => (
                <div key={x.id} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
