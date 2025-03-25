import styles from './SectionHeading2.module.css'

interface Props {
  title?: string;
}


export default function SectionHeading2({ title }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
        </div>
        <div className={styles.right}>
          {title && (
            <div className={styles.box}>
              <h2 className={styles.title}>{title}</h2>
            </div>
          )}
          {!title && <div className={styles.blackDotii}></div>}
        </div>
      </div>
    </div>
  );
}
