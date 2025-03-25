import styles from "./Projects.module.css";

const data = [
  {
    id: 1,
    name: "Chuxly",
    link: "https://www.chuxly.com/",
  },
  {
    id: 3,
    name: "Golden Drips",
    link: "https://www.goldendrips.com/",
  },
  {
    id: 4,
    name: "Taco Bell",
    link: "https://www.newtacobell.com/",
  },
  {
    id: 5,
    name: "Nier Transportation",
    link: "https://www.niertransportation.com",
  },
];

export default function Projects() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.heading}>Projects:</h3>
          <h3 className={styles.headingii}>
            ZERO-FLUFF STRATEGIC PRESENTATION <br />
            <span className={styles.span}>a.k.a the short & sweet.</span>
          </h3>
        </div>
        <div className={styles.bottom}>
          <span className={styles.includes}>Includes:</span>
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
                <span className={styles.blackDot} /> COST
              </div>
              <h4 className={styles.detail}>15k</h4>
            </div>
            <div className={styles.detailsBoxRight}>
              <div className={styles.dblTop}>
                <span className={styles.blackDot} /> TIME
              </div>
              <h4 className={styles.detail}>30 days</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
