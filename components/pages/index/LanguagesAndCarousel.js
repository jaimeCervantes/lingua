import { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import LlamaCarousel from '../../LlamaCarousel/LlamaCarousel';
import LlamaLanguages from '../../LlamaLanguages/LlamaLanguages';

export default function LanguagesAndCarousel({ languages, homeImages }) {
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
  }, [isOpen]);
  
  return (
    <section style={{ position: 'relative', marginBlockStart: '4rem' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div ref={languagesRef} style={{ textAlign: 'center', position: 'absolute', zIndex: 11 }}>
          <Button
            variant="contained"
            color="primary"
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

      <LlamaCarousel items={homeImages} 
        sx={{
          '& .swiper': { padding: '5rem' },
        }}
      ></LlamaCarousel>
    </section>
  );
}