import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import styles from './LlamaFooter.module.css';

export default function LlamaFooter({ hasFadeIn }) {
  const global = useContext(GlobalContext);

  return (
    <footer className={`footer ${hasFadeIn ? styles.fadeIn : ''}`}>
      {global.copyRight?.replace('{year}', new Date().getFullYear())}
    </footer>
  )
}