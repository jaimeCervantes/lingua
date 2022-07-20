import { Box } from '@mui/material';
import LlamaPlacementTestButton from '../Buttons/LlamaPlacementTestButton'
import LlamaFooter from "../LlamaFooter/LlamaFooter";
import LLamaHeader from "../LlamaHeader/LlamaHeader";

export default function Generic({ children }) {
  return (
    <div>
      <LLamaHeader></LLamaHeader>
      <Box 
        component="main"
      >
        {children}
      </Box>
      <LlamaFooter color="primary.main"></LlamaFooter>
      <LlamaPlacementTestButton></LlamaPlacementTestButton>
    </div>
  );
}