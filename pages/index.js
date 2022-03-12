import { Stack } from '@mui/material';
import LlamaImageList from '../components/LlamaImageList/LlamaImageList';
import LlamaTourDates from '../components/LlamaTourDates/LlamaTourDates';
import styles from './index.module.css';

export default function Index() {
  return (
    <>
      <header style={{ padding: '16px'}}>
        <Stack>
          <img src="/logo.png" alt="Logo" className={`${styles.logo} ${styles.backInDown}`}/>
        </Stack>
      </header>
      
      <main style={{ padding: '16px', paddingTop: 0 }}>
        
        <div className={styles.fadeIn}>
          <LlamaImageList></LlamaImageList>
        </div>
      </main>

      <div className={styles.fadeIn}>
        <LlamaTourDates></LlamaTourDates>
      </div>
      
      <footer className={`${styles.footer} ${styles.fadeIn}`}>
        Copyright ©{new Date().getFullYear()} Lingua. All rights reserved
      </footer>
    </>
  );
}