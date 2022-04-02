import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";

export default function PremiumClasses({ languages }) {
  return (
    <Box data-testid="premium-classes-content">
      <Typography variant="h1">Premium classes</Typography>
    
      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </Box>
  );
}

export async function getStaticProps() {
  const languages = await getLanguages();
  const teachers = await getTeachers();

  return {
    props: { languages: mapLanguagesToUI(languages.data), }
  }
}
