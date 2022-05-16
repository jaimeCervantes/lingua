import { Box, Button } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';

export default function LlamaPlacementTestButton() {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: '30px',
      width: '100%',
      textAlign: 'center',
      zIndex: 10
    }}>
      <Button
        color="secondary"
        variant="contained"
        href="https://app.nearpod.com/?pin=6mwjg"
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