import { Box } from '@mui/material';
import Link from 'next/link';

export default function LlamaLogo({ img, sx, children, url, onClick }) {

  return (
    <Box
      onClick={onClick}
      sx={{ cursor: 'pointer', ...sx }}>
      <Link href={url || '/'} legacyBehavior>
        <img
          src={ img || '/logo.png'}
          width="50"
          height="50"
          alt={'LinguaLlama Logo'}
        />
      </Link>
      {children}
    </Box>
  );
}