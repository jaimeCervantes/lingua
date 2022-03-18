import { useState } from 'react';
import { Box, Button } from '@mui/material';
import LlamaImageList from '../components/LlamaImageList/LlamaImageList';
import LlamaTourDates from '../components/LlamaTourDates/LlamaTourDates';
import LlamaBalloons from '../components/LlamaBalloons/LlamaBalloons';
import LlamaLanguages from '../components/LlamaLanguages/LlamaLanguages';
import LlamaFooter from '../components/LlamaFooter/LlamaFooter';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import Link from 'next/link';

import { fetchAPI } from '../util/api';
import { getStrapiMedia } from '../util/media';


import styles from './index.module.css';

export default function Index({ homeImages, tours, index, languages }) {
  const [ language, setLanguage ] = useState(() => languages[0]);
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <header style={{ paddingBottom: '0' }}>
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
          <img src="/logo.png" alt="Logo" className={styles.logo}/>  
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
      <LlamaFooter copyRight={index.copyRight} hasFadeIn/>
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  );
}

export async function getStaticProps() {
  const [images, tours, index, languages ] = await Promise.all([
    fetchAPI('/home-images/', {
      populate: {
        Image: {
          fields: ['formats', 'url']
        }
      },
      fields: ['title', 'cols', 'rows', 'size'],
      sort: ['id']
    }),
    fetchAPI('/tours/', { fields: ['title'], sort: ['id'] }),
    fetchAPI('/index/'),
    fetchAPI('/languages/', {
      fields: ['name', 'countryFlagCode', 'link'],
      populate: {
        Image: {
          fields: ['url']
        }
      }
    })
  ]);

  return {
    props: {
      homeImages: mapHomeImagesToUI(images.data),
      tours: toursMapToUI(tours.data),
      index: index.data.attributes,
      languages: languagesMapToUI(languages.data)
    }
  }
}

function mapHomeImagesToUI(images) {
  return images.map(item => {
    const formats = item.attributes.Image.data.attributes.formats;
    const url = formats[item.attributes.size]?.url;

    return {
      title: item.attributes.title,
      img: getStrapiMedia(url || item.attributes.Image.data.attributes.url),
      cols: item.attributes.cols,
      rows: item.attributes.rows
    };
  });
}

function toursMapToUI(tours) {
  return tours.map(item => ({ title: item.attributes.title }));
}

function languagesMapToUI(languages) {
  return languages.map(item => {
    const img = item.attributes.Image.data?.attributes.url;

    return {
      label: item.attributes.name,
      flagCode: item.attributes.countryFlagCode,
      link: item.attributes.link,
      img: img ? getStrapiMedia(img) : null
    }
  });
}