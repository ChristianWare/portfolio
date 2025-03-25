import styles from "./FinalCTA.module.css";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

const services = [
  { id: 1, name: "Business Websites" },
  { id: 2, name: "E-commerce Stores" },
  { id: 3, name: "Booking Platforms" },
];

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <div className={styles.content}>
        {/* <video preload='auto' autoPlay muted loop className={styles.video}>
          <source src='./videos/glass.mp4' />
        </video> */}
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
              We Build <br /> Innovative <br /> Websites
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
