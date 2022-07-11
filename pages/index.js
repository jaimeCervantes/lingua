import LlamaFooter from '../components/LlamaFooter/LlamaFooter';
import LlamaCarousel from '../components/LlamaCarousel/LlamaCarousel';

import styles from './index.module.css';

export { getStaticProps } from '../pagesFn/index/functions';


export default function Index({ homeImages, index }) {
  return (
    <>
      <header className={styles.header}>
        <img src="/logo-white.svg"
          alt="Linguallama Logo"
          className={styles.logo}
        />
        <div style={{ textAlign: 'center' }}>
          <h1 className={styles.title}>Welcome to lingua llama</h1>
          <p style={{ margin: 0 }}>Serving all languages worldwide</p>
        </div>
        
        <img src="/illustrations/flags.svg"
          alt="Linguallama face and flags"
          className={styles.flags}
        />
      </header>

      <section className={styles.menu}>
        <div>
          <img className={styles.iLoveIt} src="/illustrations/iLoveIt.svg" width="120"/>
        </div>
        <div className={styles.item}>
          <span className={styles.itemEmoji}>📅🙋</span>
          <p className={styles.itemText}>Daily Schedule</p>
        </div>

        <div className={styles.item}>
          <span className={styles.itemEmoji}>🥳💬</span>
          <p className={styles.itemText}>Fun events</p>
        </div>
        
        <div className={styles.item}>
          <span className={styles.itemEmoji}>🌎🏖️</span>
          <p className={styles.itemText}>Tours</p>
        </div>
        
        <div className={styles.item}>
          <span className={styles.itemEmoji}>👩‍🎓</span>
          <img className={styles.itemFlag} src="https://flagcdn.com/es.svg" width="100"/>
          <p className={styles.itemText}>Spanish classes</p>
        </div>
        
        <div className={styles.item}>
          <span className={styles.itemEmoji}>👨‍🎓</span>
          <img className={styles.itemFlag} src="https://flagcdn.com/us.svg" width="100"/>
          <p className={styles.itemText}>English classes</p>
        </div>

        <div className={styles.item}>
          <span className={styles.itemEmoji}>💬🗺️</span>
          <p className={styles.itemText}>More languages</p>
        </div>
      </section>

      <LlamaCarousel items={homeImages} 
        sx={{
          marginTop: '2rem',
          '& .swiper': { padding: '4rem' },
        }}
      ></LlamaCarousel>

      <LlamaFooter
        copyRight={index.copyRight}
        color="white"
      >
      </LlamaFooter>
    </>
  );
}

Index.getLayout = function (page) {
  return (
    <div className={styles.index}>
      {page}
    </div>
  );
};