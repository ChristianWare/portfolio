import styles from "./FinalCTA.module.css";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

const services = [
  { id: 1, name: "Multi-page Business Websites" },
  { id: 2, name: "E-commerce Stores" },
  { id: 3, name: "Landing Pages" },
  { id: 4, name: "Full stack web applications" },
];

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <div className={styles.content}>
        <div className={styles.contentChildren}>
          <div className={styles.left}>
            <Logo size='large' color='tan' />
          </div>
          <div className={styles.right}>
            <ul className={styles.servicesContainer}>
              {services.map((x) => (
                <li className={styles.service} key={x.id}>
                  {x.name}
                  <span className={styles.blackDot} />
                </li>
              ))}
            </ul>
            <h2 className={styles.heading}>
              Chris Ware&apos;s <br /> Portfolio <br /> Website
            </h2>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </section>
  );
}
