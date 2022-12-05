import { Box, Button } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';

export default function LlamaPlacementTestButton({ sx }) {
  return (
    <Box sx={ sx || {
      position: 'fixed',
      bottom: '30px',
      width: '100%',
      textAlign: 'center',
      zIndex: 20
    }}>
      <Button
        color="secondary"
        variant="contained"
        href="https://app.nearpod.com/?pin=LPDTU"
        target="__blank"
        sx={{
          fontFamily: 'Bangers',
          fontSize: '1.5rem',
        }}
      >
        <QuizIcon sx={{ marginRight: '10px' }}/> Free English placement test
      </Button>
    </Box>
  );
}