import { Box, Button } from '@mui/material';

export default function LlamaMenu({ color }) {
  return (
    <Box sx={{ flexGrow: 1, display: { sm: 'flex' }, marginLeft: {  xs: 0, sm: '1rem' } }}>
      {['Home', 'Events', 'About'].map((page) => (
        <Button
          key={page}
          sx={{
            display: 'inline-block',
            '&:hover': {
              textDecoration: 'underline'
            },
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontFamily: 'Bangers',
            color: color || 'secondary.main'
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}