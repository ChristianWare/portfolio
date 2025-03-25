import styles from "./Projects.module.css";

const data = [
  {
    id: 1,
    name: "Figma",
    link: "Wireframing & Prototyping",
  },
  {
    id: 3,
    name: "Trello",
    link: "Collaboration & Productivity",
  },
  {
    id: 4,
    name: "Git",
    link: "Version Control",
  },
  {
    id: 5,
    name: "VSCode",
    link: "Text Editors & IDE",
  },
];

export default function Projects() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.heading}>
            My preferred tools for building exceptional websites:
          </h3>
          {/* <h3 className={styles.headingii}>
            ZERO-FLUFF STRATEGIC PRESENTATION <br />
            <span className={styles.span}>a.k.a the short & sweet.</span>
          </h3> */}
        </div>
        <div className={styles.bottom}>
          <span className={styles.includes}>Includes,  but not limited to:</span>
          <ul className={styles.mapDataBox}>
            {data.map((x) => (
              <li key={x.id} className={styles.name}>
                {x.name} <span className={styles.blackDot} />
              </li>
            ))}
          </ul>
          <div className={styles.detailsBox}>
            <div className={styles.detailsBoxLeft}>
              <div className={styles.dblTop}>
                <span className={styles.blackDot} /> Github Projects
              </div>
              <h4 className={styles.detail}>140 +</h4>
            </div>
            <div className={styles.detailsBoxRight}>
              <div className={styles.dblTop}>
                <span className={styles.blackDot} /> Deployments
              </div>
              <h4 className={styles.detail}>50 +</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
