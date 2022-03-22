import { Box, Button } from '@mui/material';

export default function LlamaMenu() {
  return (
    <Box sx={{ flexGrow: 1, display: { sm: 'flex' } }}>
      {['Home', 'Events', 'About'].map((page) => (
        <Button
          key={page}
          sx={{
            display: 'inline-block',
            '&:hover': {
              textDecoration: 'underline'
            },
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontFamily: 'Bangers'
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}