import { Box } from '@mui/material';
import Head from 'next/head';
import LlamaPlacementTestButton from '../Buttons/LlamaPlacementTestButton'
import LlamaFooter from "../LlamaFooter/LlamaFooter";
import LLamaHeader from "../LlamaHeader/LlamaHeader";

export default function Generic({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/generic-layout.css" />
      </Head>
      <LLamaHeader></LLamaHeader>
      <Box 
        component="main"
      >
        {children}
      </Box>
      <LlamaFooter color="secondary.main"></LlamaFooter>
      <LlamaPlacementTestButton></LlamaPlacementTestButton>
    </>
  );
}