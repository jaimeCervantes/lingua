import { Box } from '@mui/material';
import LlamaPlacementTestButton from '../Buttons/LlamaPlacementTestButton'
import LlamaFooter from "../LlamaFooter/LlamaFooter";
import LLamaHeader from "../LlamaHeader/LlamaHeader";

export default function Generic({ children }) {
  return (
    <div style={{
      backgroundImage: 'url("/backgrounds/mountains-down.svg"), url("/backgrounds/mountains-red.svg")',
      backgroundRepeat: 'repeat-x, repeat-x',
      backgroundSize: 'contain, contain',
      backgroundPosition: 'top left, bottom left'
    }}>
      <LLamaHeader></LLamaHeader>
      <Box 
        component="main"
      >
        {children}
      </Box>
      <LlamaFooter color="secondary.main"></LlamaFooter>
      <LlamaPlacementTestButton></LlamaPlacementTestButton>
    </div>
  );
}