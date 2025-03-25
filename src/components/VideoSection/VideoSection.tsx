import styles from "./VideoSection.module.css";

export default function VideoSection() {
  return (
    <section className={styles.container}>
      <video className={styles.videoBackground} autoPlay loop muted>
        <source src='/videos/glass3.mp4' type='video/mp4' />
      </video>
    </section>
  );
}
