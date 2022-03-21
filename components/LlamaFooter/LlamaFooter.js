import { useContext } from 'react';
import { Box } from '@mui/system';
import { GlobalContext } from '../GlobalContext';
import styles from './LlamaFooter.module.css';
import { Toolbar } from '@mui/material';

import LlamaSocialNetworks from '../LlamaSocialNetworks/LlamaSocialNetworks';
import LlamaTelButton from '../LlamaTelButton/LlamaTelButton';

export default function LlamaFooter({ hasFadeIn, children, sx }) {
  const global = useContext(GlobalContext);

  return (
    <Toolbar
      className={`footer ${hasFadeIn ? styles.fadeIn : ''}`}
      sx={
        sx || {
          padding: '1rem',
          flexDirection: 'column',
          backgroundColor: 'secondary.main',
          color: 'white'
       }
      }
      component="footer"
    >
      <LlamaSocialNetworks></LlamaSocialNetworks>

      {children}

      <LlamaTelButton flexDirection="column"></LlamaTelButton>
      
      <Box>{global.copyRight?.replace('{year}', new Date().getFullYear())}</Box>
    </Toolbar>
  );
}