import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';

import LlamaFooter from '../components/LlamaFooter/LlamaFooter';
import LlamaCarousel from '../components/LlamaCarousel/LlamaCarousel';
import LlamaLanguages from '../components/LlamaLanguages/LlamaLanguages';

import styles from './index.module.css';
import LlamaSocialNetworks from '../components/LlamaSocialNetworks/LlamaSocialNetworks';

export { getStaticProps } from '../pagesFn/index/functions';

export default function Index({ homeImages, index, languages }) {
  const [ language, setLanguage ] = useState(() => languages[0]);
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
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

      <LlamaSocialNetworks color={'white'} sx={{ textAlign: 'center'}}></LlamaSocialNetworks>

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
          <a
            className={styles.link}
            href="https://discord.com/invite/aaqNMfX77T"
            target="__blank"
          >
            <span className={styles.itemEmoji}>🥳💬</span>
          </a>
          <p className={styles.itemText}>
            <a className={styles.link} href="https://discord.com/invite/aaqNMfX77T" target="__blank">Fun events</a>
          </p>
        </div>
        
        <div className={styles.item}>
          <a
            className={styles.link}
            href="https://linguallama-store.mailchimpsites.com/"
            target="__blank"
          >
            <span className={styles.itemEmoji}>🌎✈️</span>
          </a>
          <p className={styles.itemText}>
            <a className={styles.link} href="https://linguallama-store.mailchimpsites.com/" target="__blank">Tours</a>
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
            <img className={styles.itemImg} src="/illustrations/more-languages.png" width="250" />
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

      <section style={{ position: 'relative' }}>
        <LlamaCarousel items={homeImages} 
          sx={{
            marginTop: '2rem',
            '& .swiper': { padding: '4rem' },
          }}
        ></LlamaCarousel>
        <div style={{ position: 'absolute', top: '16px', width: '100%', zIndex: 11, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Button
            variant="contained"
            color="tertiary"
            onClick={() => setIsOpen(!isOpen)}
            endIcon={isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          >
            {`I'm learning ${language ? language.label : ''}`}
          </Button>
          
          <LlamaLanguages
            languages={languages}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            value={language}
            setValue={setLanguage}
            sx={{ background: 'white' }}
          >
          </LlamaLanguages>
        </div>
        <div style={{ position: 'absolute', width: '100%', bottom: '100px', zIndex: 11, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link href="/home">
            <Button
              className="text-bold"
              variant="contained"
              color="tertiary"
              size="large"
              sx={{ height: '60px' }}
              startIcon={<DoorSlidingIcon />}
              href="https://linguallama-store.mailchimpsites.com/"
            >
              {index.enterText}
            </Button>
          </Link>
        </div>
      </section>
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