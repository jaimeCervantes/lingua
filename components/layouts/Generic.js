import { Box } from '@mui/material';
import LlamaFooter from "../LlamaFooter/LlamaFooter";
import LLamaHeader from "../LlamaHeader/LlamaHeader";

export default function Generic({ children }) {
  return (
    <>
      <LLamaHeader></LLamaHeader>
      <Box 
        component="main"
        sx={{ marginBottom: { sm: '100px' } }}
      >
        {children}
      </Box>
      <LlamaFooter color="secondary.main"></LlamaFooter>
    </>
  );
}