import LlamaFooter from '../components/LlamaFooter/LlamaFooter';

import styles from './index.module.css';
import LlamaSocialNetworks from '../components/LlamaSocialNetworks/LlamaSocialNetworks';
import MainMenu from '../components/pages/index/MainMenu';
import EnterSiteLanguagesCarousel from '../components/pages/index/EnterSiteLanguagesCarousel';
import LlamaMenu from '../components/LlamaMenu/LlamaMenu';

export { getStaticProps } from '../pagesFn/index/functions';

export default function Index({ homeImages, index, languages }) {
  return (
    <>
      <LlamaMenu sx={{
        color: "primary.main", 
        flexGrow: 1,
        marginLeft: '0.3rem',
        '@media (max-width: 480px)': {
          display: 'none'
        }
      }}></LlamaMenu>
      <header className={styles.header}>
        <img src="/logo-white.svg"
          alt="Linguallama Logo"
          className={styles.logo}
        />
        <div style={{ textAlign: 'center' }}>
          <h1 className={styles.title}>Welcome to LinguaLlama</h1>
          <p style={{ margin: 0 }}>Serving all languages worldwide</p>
        </div>
        
        <img src="/illustrations/flags.svg"
          alt="Linguallama face and flags"
          className={styles.flags}
        />
      </header>

      <LlamaSocialNetworks color="primary.main" sx={{ textAlign: 'center'}}></LlamaSocialNetworks>

      <MainMenu></MainMenu>

      <EnterSiteLanguagesCarousel homeImages={homeImages} languages={languages} enterText={index.enterText}></EnterSiteLanguagesCarousel>

      <LlamaFooter
        copyRight={index.copyRight}
        color="primary.main"
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