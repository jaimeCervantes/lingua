import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages";
import LlamaEventList from "../components/LlamaEventList/LlamaEventList";

export { getServerSideProps } from "../pagesFn/home/functions.js";

export default function Home({ events, languages }) {
  return (
    <>
      <Typography variant="h1" sx={{ xs: "2rem", sm: "6rem" }}>Welcome to LinguaLlama!</Typography>

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>

      <Box>
        <Typography variant="h2">Current Events</Typography>

        <LlamaEventList events={events}></LlamaEventList>
      </Box>
    </>
  );
}
