import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages";
import LlamaEventList from "../components/LlamaEventList/LlamaEventList";
import LlamaIllustration from "../components/LlamaIllustration/LlamaIllustration";

export { getStaticProps } from "../pagesFn/home/functions.js";

export default function Home({ events, languages }) {
  return (
    <>
      <LlamaIllustration src="/illustrations/welcome.svg" />

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>

      <Typography variant="h2">Current Events</Typography>

      <LlamaEventList events={events}></LlamaEventList>
    </>
  );
}
