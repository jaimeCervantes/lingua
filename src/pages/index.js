import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import Link from 'next/link';

import LlamaShowOnScrollAppBar from 'components/LlamaShowOnScrollAppBar/LlamaShowOnScrollAppBar';
import LlamaTourDates from 'components/LlamaTourDates/LlamaTourDates';
import LlamaBalloons from 'components/LlamaBalloons/LlamaBalloons';
import LlamaLanguages from 'components/LlamaLanguages/LlamaLanguages';
import LlamaFooter from 'components/LlamaFooter/LlamaFooter';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';

import styles from './index.module.css';

import { getLayout } from 'pagesFn/index/functions';
import LlamaSocialNetworks from 'components/LlamaSocialNetworks/LlamaSocialNetworks';
import LlamaTelButton from 'components/LlamaTelButton/LlamaTelButton';
import LlamaCarousel from 'components/LlamaCarousel/LlamaCarousel';

export { getStaticProps } from 'pagesFn/index/functions';

export default function Index({ homeImages, tours, index, languages }) {
  const [ language, setLanguage ] = useState(() => languages[0]);
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <Box>
      <LlamaShowOnScrollAppBar elevation={0}>
        <LlamaSocialNetworks sx={{ flexGrow: 1 }}>
          <Button
            sx={{
              display: 'inline-block',
              '&:hover': {
                textDecoration: 'underline'
              },
              fontSize: { sm: '1.5rem', xs: '1rem' },
              fontFamily: 'Bangers',
              color: 'secondary.main'
            }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSe1nXK4UCVgf9gpOYk52vVMBdEiUQh0qcEqgH_gvWkWsetOVg/viewform"
            target="_blank"
          >
            Teachers
          </Button>
        </LlamaSocialNetworks>
        <LlamaTelButton sx={{ padding: { xs: 0, sm: 'inherit' } }}></LlamaTelButton>
      </LlamaShowOnScrollAppBar>
      <header style={{ padding: '1rem', paddingBottom: 0, minHeight: '300px' }}>
        <LlamaBalloons
          className={styles.backInDown}
          sx={{ marginTop: { xs: '2rem', sm: 'inherit' } }}
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
          <img src="/logo.svg"
            alt="Linguallama Logo"
            className={styles.logo}
            style={{ marginBottom: '0.5rem' }}
          />  
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

      <Box sx={{ padding: '0' }}>
        <div className={styles.fadeIn}>
          <LlamaTourDates
            tours={tours}
            title={index.title}
            bookText={index.bookText}
          ></LlamaTourDates>
        </div>

        <LlamaCarousel items={homeImages} 
          sx={{
            marginTop: '2rem',
            '& .swiper': { padding: '4rem' },
          }}
        ></LlamaCarousel>

        <Box sx={{ textAlign: 'center', marginBottom: '4rem', marginTop: '4rem' }}>
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
      </Box>
      <LlamaFooter
        copyRight={index.copyRight}
        hasFadeIn
        color="secondary.main"
      >
      </LlamaFooter>
    </Box>
  );
}

Index.getLayout = getLayout;