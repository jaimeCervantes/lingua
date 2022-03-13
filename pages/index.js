import { Stack } from '@mui/material';
import LlamaImageList from '../components/LlamaImageList/LlamaImageList';
import LlamaTourDates from '../components/LlamaTourDates/LlamaTourDates';
import styles from './index.module.css';

import { fetchAPI } from '../util/api';
import { getStrapiMedia } from '../util/media';

export default function Index({ homeImages, tours, index }) {
  return (
    <>
      <header style={{ padding: '16px'}}>
        <Stack>
          <img src="/logo.png" alt="Logo" className={`${styles.logo} ${styles.backInDown}`}/>
        </Stack>
      </header>

      <main style={{ padding: '16px', paddingTop: 0 }}>
        <div className={styles.fadeIn}>
          <LlamaImageList images={homeImages}></LlamaImageList>
        </div>
      </main>

      <div className={styles.fadeIn}>
        <LlamaTourDates
          tours={tours}
          title={index.title}
          bookText={index.bookText}
          enterText={index.enterText}
        ></LlamaTourDates>
      </div>
      
      <footer className={`${styles.footer} ${styles.fadeIn}`}>
        {index.copyRight.replace('{year}', new Date().getFullYear())}
      </footer>
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
      fields: ['title', 'cols', 'rows', 'size']
    }),
    fetchAPI('/tours/', { fields: ['title'] }),
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