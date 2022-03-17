import styles from './LlamaBalloons.module.css';

export default function LlamaBallons({ children }) {
  return (
    <div className={`${styles.llamaBalloons} ${styles.backInDown}`}>
      
      <div className={`${styles.balloon} ${styles.middleTop}`}>
        <span className={`${styles.triangle} ${styles.triangleRight}`}></span>
        <a
          className={styles.text}
          href="https://linguallama-store.mailchimpsites.com/english-classes"
        >English</a>
      </div>

      {children}
      
      <div className={styles.flex}>
        <div className={`${styles.balloon} ${styles.rightMiddle}`}>
          <span className={`${styles.triangle} ${styles.triangleLeft}`}></span>
          <a
            className={styles.text}
            href="https://linguallama-store.mailchimpsites.com/spanish-classes"
          >Spanish</a>
        </div>

        <div className={`${styles.balloon} ${styles.leftMiddle}`}>
          <span className={`${styles.triangle} ${styles.triangleRight}`}></span>
          <a
            className={`${styles.text} ${styles.smallerText}`}
            href="https://linguallama-store.mailchimpsites.com/more-languages
          >More <br/>languages</a>
        </div>
      </div>
      
    </div>
  );
}