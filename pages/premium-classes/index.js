import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";

export default function About({ languages }) {
  return (
    <>
      <Box>
        <Typography variant="h1">Premium classes</Typography>
      </Box>

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </>
  );
}

export async function getStaticProps() {
  const languages = await getLanguages();

  return {
    props: { languages: mapLanguagesToUI(languages.data), }
  }
}
