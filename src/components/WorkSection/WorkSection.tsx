import styles from "./WorkSection.module.css";
import Button from "../Button/Button";

const data = [
  {
    title: "Freelance Developer",
    company: "(Self)",
  },
  {
    title: "Contract Web Developer",
    company: "(Kurt Nobel International)",
  },
  {
    title: "Contract Software Engineer",
    company: "(Joyus App)",
  },

  {
    title: "Software Engineer",
    company: "(Mentorworks)",
  },
  {
    title: "Contract Frontend Developer",
    company: "(Fandem)",
  },
];

export default function WorkSection() {
  return (
    <section className={styles.container} id='resume'>
      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.sectionTitle}>My Experience</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <p className={styles.copy}>
              Here is a brief summary of the places I have worked. Click here to
              download my resume.
            </p>
            {/* <Link
              href='/Chris_Ware_Resume_2025.pdf'
              target='_blank'
              download={true}
              className={styles.resumeContainer}
            >
              Download Resume
            </Link> */}
            <div className={styles.btnContainer}>
              <Button btnType='primary' text='Download Resume' href='/' />
            </div>
          </div>
          <div className={styles.right}>
            <ul className={styles.list}>
              {data.map((x, index) => (
                <li key={index} className={styles.name}>
                  • {x.title} - {x.company}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
