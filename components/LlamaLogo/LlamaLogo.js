import { Box } from '@mui/material';

export default function LlamaLogo({ sx, children, img }) {
  return (
    <Box sx={sx || { width: '100px' }}>
      <img
        src={ img || '/logo.svg'}
        style={{ width: '100%'}}
      />

      {children}
    </Box>
  );
}