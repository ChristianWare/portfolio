import styles from "./Process.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Projects from "../Projects/Projects";
import SectionHeading from "../SectionHeading/SectionHeading";

const data = [
  {
    id: 1,
    feature: "Discovery",
    desc: "→ I begin each project by thoroughly understanding the goals, target audience, and technical requirements.",
  },
  {
    id: 2,
    feature: "Design",
    desc: "→ I create detailed wireframes and prototypes that align with the project's objectives.",
  },
  {
    id: 3,
    feature: "Develop",
    desc: "→ With the design finalized, I move into development, leveraging modern technologies like Next.js and TypeScript.",
  },
  {
    id: 4,
    feature: "Deploy",
    desc: "→ Before deployment, I conduct extensive testing to guarantee optimal performance and reliability.",
  },
];

export default function Process() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading
          number='3'
          title='My Approach to coding'
        />
        <div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.heading}>The strategic narrative process</h3>
          </div>
          <div className={styles.right}>
            <div className={styles.mapDataBox}>
              {data.map((x) => (
                <div className={styles.card} key={x.id}>
                  <span className={styles.blackDot} />
                  <div className={styles.cardLeft}>
                    <span className={styles.id}>0{x.id}.</span>
                  </div>
                  <div className={styles.cardRight}>
                    <h4 className={styles.feature}>{x.feature}</h4>
                    <p className={styles.desc}>{x.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.projectsBox}>
              <Projects />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
