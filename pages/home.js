import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages";
import LlamaEventList from "../components/LlamaEventList/LlamaEventList";

export { getServerSideProps } from "../pagesFn/home/functions.js";

export default function Home({ events, languages }) {
  return (
    <>
      
      <img
        src="/illustrations/welcome.svg"
        style={{
          display: 'block',
          minWidth: '100px',
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '-8%'
        }}
      />

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>

      <Box>
        <Typography variant="h2">Current Events</Typography>

        <LlamaEventList events={events}></LlamaEventList>
      </Box>
    </>
  );
}
