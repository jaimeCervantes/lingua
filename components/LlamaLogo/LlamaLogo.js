import { Box } from '@mui/material';

import styles from './LlamaLogo.module.css';

export default function LlamaLogo({ sx, children }) {
  return (
    <Box sx={sx || { width: '200px' }}>
      <img
        src="/logo-white.svg"
        style={{ width: '100%'}}
      />

      {children}
    </Box>
  );
}