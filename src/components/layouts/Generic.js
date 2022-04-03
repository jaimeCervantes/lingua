import { Box, Button } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import LlamaFooter from "../LlamaFooter/LlamaFooter";
import LLamaHeader from "../LlamaHeader/LlamaHeader";

export default function Generic({ children }) {
  return (
    <>
      <LLamaHeader></LLamaHeader>
      <Box 
        component="main"
      >
        {children}
      </Box>
      <LlamaFooter color="secondary.main"></LlamaFooter>
      <Box sx={{
        position: 'fixed',
        bottom: '30px',
        width: '100%',
        textAlign: 'center'
      }}>
        <Button
          color="secondary"
          variant="contained"
          href="https://app.nearpod.com/?pin=ITR37"
          target="__blank"
          sx={{
            fontFamily: 'Bangers',
            fontSize: '1.5rem',
          }}
        >
          <QuizIcon sx={{ marginRight: '10px' }}/> Free English placement test
        </Button>
      </Box>
    </>
  );
}