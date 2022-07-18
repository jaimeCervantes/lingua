import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';

import LlamaCarousel from '../../LlamaCarousel/LlamaCarousel';
import LlamaLanguages from '../../LlamaLanguages/LlamaLanguages';

import styles from './EnterSiteLanguagesCarousel.module.css';

export default function EnterSiteLanguagesCarousel({ languages, homeImages, enterText }) {
  const [ language, setLanguage ] = useState(() => languages[0]);
  const [ isOpen, setIsOpen ] = useState(false);
  const languagesRef = useRef();

  const clickCloseHandler = useCallback(function (e) {
    if (languagesRef.current.contains(e.target) && languagesRef.current !== e.target) {
      return;
    }

    setIsOpen(false);
  }, [languagesRef, setIsOpen])

  useEffect(() => {
    if(isOpen) {
      document.addEventListener('click', clickCloseHandler);

      return () => {
        document.removeEventListener('click', clickCloseHandler);
      }
    }
  }, [isOpen])
  return (
    <section style={{ position: 'relative' }}>
      <LlamaCarousel items={homeImages} 
        sx={{
          marginTop: '2rem',
          '& .swiper': { padding: '4rem' },
        }}
      ></LlamaCarousel>
      <div className={styles.languageSelectorWrapper}>
        <div ref={languagesRef} style={{ textAlign: 'center' }}>
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
      </div>
      <div className={styles.enterSiteWrapper}>
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
            {enterText}
          </Button>
        </Link>
      </div>
    </section>
  );
}