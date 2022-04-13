import { useState } from "react";
import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";
import LlamaLanguagesSelector from "components/LlamaLanguageSelector/LlamaLanguageSelector";
import LlamaPaidClassList from "../../components/LlamaClasses/LlamaPaidClassList";

import { getClasses } from 'pagesFn/premium-classes/functions';
import { mapClassesToUI } from 'pagesFn/premium-classes/mappers';

export default function PremiumClasses({ languages, classes }) {
  const [selectedLanguage, setSelectedLanguage ] = useState(() => languages[0])
  
  return (
    <Box data-testid="premium-classes-content">
      <Box sx={{ marginBottom: '2rem' }}>
        <LlamaLanguagesSelector
          languages={languages}
          value={selectedLanguage}
          setValue={setSelectedLanguage}
        ></LlamaLanguagesSelector>
      </Box>

      <LlamaPaidClassList teachers={classes}></LlamaPaidClassList>

      <Typography variant="h2">Languages</Typography>

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </Box>
  );
}

export async function getStaticProps() {
  const languages = await getLanguages();
  const classes = await getClasses();

  return {
    props: {
      languages: mapLanguagesToUI(languages.data),
      classes: mapClassesToUI(classes.data),
    }
  }
}
