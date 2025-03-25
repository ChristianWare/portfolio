import styles from "./SectionHeading.module.css";

interface Props {
  number: string;
  title?: string;
}

export default function SectionHeading({ number, title }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <span className={styles.number}>{number}:</span>
          <div className={styles.blackDot2}></div>
        </div>
        <div className={styles.right}>
          {title && (
            <div className={styles.box}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.blackDot}></div>
            </div>
          )}
          {!title && <div className={styles.blackDotii}></div>}
        </div>
      </div>
    </div>
  );
}
