import styles from './MainMenu.module.css';
import Link from 'next/link';

export default function MainMenu() {
  return (
    <section className={styles.menu}>
      <div>
        <img className={styles.iLoveIt} src="/illustrations/iLoveIt.svg" width="120"/>
      </div>
      <div className={styles.item}>
        <a
          className={styles.link}
          href="https://linktr.ee/LinguaLlama"
          target="__blank"
        >
          <span className={styles.itemEmoji}>📅🙋</span>
        </a>
        <p className={styles.itemText}>
          <a className={styles.link} href="https://linktr.ee/LinguaLlama" target="__blank">Daily Schedule</a>
        </p>
      </div>
      
      <div className={styles.item}>
        <Link href="/events">
          <a className={styles.link}>
            <span className={styles.itemEmoji}>🥳💬</span>
          </a>
        </Link>
        <p className={styles.itemText}>
          <Link href="/events">
            <a className={styles.link}>Fun events</a>
          </Link>
        </p>
      </div>
      
      <div className={styles.item}>
        <Link href="/tours">
          <a
            className={styles.link}
          >
            <span className={styles.itemEmoji}>🌎✈️</span>
          </a>
        </Link>
        <p className={styles.itemText}>
          <Link href="/tours">
            <a className={styles.link}>Tours</a>
          </Link>
        </p>
      </div>
      
      <div className={styles.item}>
        <a
          className={styles.link}
          href="https://linguallama-store.mailchimpsites.com/spanish-classes"
          target="__blank"
        >
          <span className={styles.itemEmoji}>👩‍🎓</span>
          <img className={styles.itemFlag} src="https://flagcdn.com/es.svg" width="100"/>
        </a>
        <p className={styles.itemText}>
          <a
            className={styles.link}
            href="https://linguallama-store.mailchimpsites.com/spanish-classes"
            target="__blank"
          >
            Spanish classes
          </a>
        </p>
      </div>
      
      <div className={styles.item}>
        <a
          className={styles.link}
          href="https://linguallama-store.mailchimpsites.com/english-classes"
          target="__blank"
        >
          <span className={styles.itemEmoji}>👨‍🎓</span>
          <img className={styles.itemFlag} src="https://flagcdn.com/us.svg" width="100"/>
        </a>
        <p className={styles.itemText}>
          <a
            className={styles.link}
            href="https://linguallama-store.mailchimpsites.com/english-classes"
            target="__blank"
          >
            English classes
          </a>
        </p>
      </div>

      <div className={styles.item}>
        <a
          className={styles.link}
          href="https://linguallama-store.mailchimpsites.com/more-languages"
          target="__blank"
        >
          <img
            className={styles.itemImg}
            src="/illustrations/more-languages.png"
            srcSet="/illustrations/more-languages.png 130w, /illustrations/more-languages.png 200w, /illustrations/more-languages.png 450w"
            sizes="(max-width: 800px) 130px, (max-width: 1900px) 250px, (min-width: 1901px) 450px"
          />
        </a>
        <p className={styles.itemText}>
          <a
            className={styles.link}
            href="https://linguallama-store.mailchimpsites.com/more-languages"
            target="__blank"
          >
            More languages
          </a>
        </p>
      </div>
    </section>
  );
}