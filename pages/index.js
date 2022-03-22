import { useState } from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import Link from 'next/link';

import LlamaShowOnScrollAppBar from '../components/LlamaShowOnScrollAppBar/LlamaShowOnScrollAppBar';
import LlamaImageList from '../components/LlamaImageList/LlamaImageList';
import LlamaTourDates from '../components/LlamaTourDates/LlamaTourDates';
import LlamaBalloons from '../components/LlamaBalloons/LlamaBalloons';
import LlamaLanguages from '../components/LlamaLanguages/LlamaLanguages';
import LlamaFooter from '../components/LlamaFooter/LlamaFooter';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';

import styles from './index.module.css';

import { getLayout } from '../pagesFn/index/functions';
import LlamaSocialNetworks from '../components/LlamaSocialNetworks/LlamaSocialNetworks';
import LlamaTelButton from '../components/LlamaTelButton/LlamaTelButton';

export { getStaticProps } from '../pagesFn/index/functions';

export default function Index({ homeImages, tours, index, languages }) {
  const [ language, setLanguage ] = useState(() => languages[0]);
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <AppBar position="relative" color="secondary" component="div">
        <Toolbar disableGutters sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
          <LlamaSocialNetworks sx={{ flexGrow: 1 }}></LlamaSocialNetworks>
          <LlamaTelButton></LlamaTelButton>
        </Toolbar>
      </AppBar>
      <LlamaShowOnScrollAppBar color="secondary" scrollTrigerProps={{ threshold: 70 }} opacity="0.7">
        <LlamaSocialNetworks sx={{ flexGrow: 1 }}></LlamaSocialNetworks>
        <LlamaTelButton></LlamaTelButton>
      </LlamaShowOnScrollAppBar>
      <header style={{ padding: '1rem', paddingBottom: 0 }}>
        <LlamaBalloons
          className={styles.backInDown}
          style={{ textAlign: 'center' }}
          moreLanguages={
            <Button
              className={styles.languagesButton}
              variant="contained"
              color="secondary"
              onClick={() => setIsOpen(!isOpen)}
              endIcon={isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            >
              {`I'm learning ${language ? language.label : ''}`}
            </Button>
          }
        >
          <img src="/logo.svg" alt="Logo" className={styles.logo} style={{ marginBottom: '0.5rem' }}/>  
        </LlamaBalloons>
      </header>

      <LlamaLanguages
        className={styles.LlamaLanguages}
        languages={languages}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        value={language}
        setValue={setLanguage}
      >
      </LlamaLanguages>

      <main style={{ padding: '0' }}>
        <div className={styles.fadeIn}>
          <LlamaTourDates
            tours={tours}
            title={index.title}
            bookText={index.bookText}
          ></LlamaTourDates>
        </div>

        <div className={styles.fadeIn}>
          <LlamaImageList images={homeImages}></LlamaImageList>
        </div>

        <Box className={`${styles.enterContainer} ${styles.fadeIn}`}>
          <Link href="/home">
            <Button
              className="text-bold"
              variant="contained"
              color="primary"
              size="large"
              sx={{ height: '60px' }}
              startIcon={<DoorSlidingIcon />}
              href="https://linguallama-store.mailchimpsites.com/"
            >
              {index.enterText}
            </Button>
          </Link>
        </Box>
      </main>
      <LlamaFooter
        copyRight={index.copyRight}
        hasFadeIn
      >
      </LlamaFooter>
    </>
  );
}

Index.getLayout = getLayout;