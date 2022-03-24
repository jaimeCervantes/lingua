import { Box } from '@mui/material';
import Link from 'next/link';

export default function LlamaLogo({ img, sx, children, url }) {

  return (
    <Box sx={sx || { width: '100px' }}>
      <Link href="/">
        <img
          src={ img || '/logo.svg'}
          style={{ width: '100%'}}
          alt={'LinguaLlama Logo'}
        />
      </Link>
      {children}
    </Box>
  );
}