import { Box, Typography } from "@mui/material";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "../pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "../pagesFn/shared/mappers.js";
import { useRef } from "react";
import useLinguaHouseWidget from "../components/pages/student-account/useLinguaHouseWidget";

export default function StudentAccount({ languages }) {
  const linguahouseContainer = useRef(null);
  useLinguaHouseWidget(linguahouseContainer);
  return (
    <>
      <Typography variant="h2" id="student-account">Student account</Typography>

      <section ref={linguahouseContainer}></section>

      <Typography variant="h2">Languages</Typography>

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
