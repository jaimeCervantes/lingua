import { Box } from '@mui/material';
import Link from 'next/link';

export default function LlamaLogo({ img, sx, children, url, onClick }) {

  return (
    <Box
      onClick={onClick}
      sx={{ width: '100px', cursor: 'pointer', ...sx }}>
      <Link href={url || '/'}>
        <img
          src={ img || '/logo.png'}
          style={{ width: '100%'}}
          alt={'LinguaLlama Logo'}
        />
      </Link>
      {children}
    </Box>
  );
}