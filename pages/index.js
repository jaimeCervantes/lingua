import { Stack, Box, Button } from '@mui/material';
import LlamaImageList from '../components/LlamaImageList/LlamaImageList';
import LlamaTourDates from '../components/LlamaTourDates/LlamaTourDates';
import LlamaFooter from '../components/LlamaFooter/LlamaFooter';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';

import Link from 'next/link';

import { fetchAPI } from '../util/api';
import { getStrapiMedia } from '../util/media';


import styles from './index.module.css';

export default function Index({ homeImages, tours, index }) {
  return (
    <>
      <header style={{ paddingBottom: '0' }}>
        <Stack>
          <img src="/logo.png" alt="Logo" className={`${styles.logo} ${styles.backInDown}`}/>
        </Stack>
      </header>

      <main style={{ padding: '0' }}>
        <div className={styles.fadeIn} style={{ marginTop: '1.5rem' }}>
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
              variant="contained"
              color="primary"
              size="large"
              sx={{ height: '60px' }}
              startIcon={<DoorSlidingIcon />}
              href="https://linguallama-store.mailchimpsites.com/"
              target="_blank"
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
  const [images, tours, index ] = await Promise.all([
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
    fetchAPI('/index/')
  ]);

  return {
    props: {
      homeImages: mapHomeImagesToUI(images.data),
      tours: toursMapToUI(tours.data),
      index: index.data.attributes
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