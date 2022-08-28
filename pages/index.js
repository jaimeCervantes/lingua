import LlamaFooter from '../components/LlamaFooter/LlamaFooter';

import styles from './index.module.css';
import LlamaSocialNetworks from '../components/LlamaSocialNetworks/LlamaSocialNetworks';
import MainMenu from '../components/pages/index/MainMenu';
import EnterSiteLanguagesCarousel from '../components/pages/index/EnterSiteLanguagesCarousel';
import LlamaMenu from '../components/LlamaMenu/LlamaMenu';
import LlamaDialog from '../components/LlamaDialog/LlamaDialog';

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

{
  /*<LlamaDialog open={true} fullWidth={true} maxWidth={'xl'}>
        <iframe
          style={{ display: 'block', width: '100%', minHeight: '80vh' }}
          src="https://www.youtube.com/embed/oUUSBPlS0RA?rel=0&autoplay=1"
          title="22 Perú Immersion Trip Lima & Cuzco December 18-30"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        >
        </iframe>
      </LlamaDialog>
      */
}
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
