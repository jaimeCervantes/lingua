import { Box, Typography } from "@mui/material";
import Image from "next/image.js";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "../pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "../pagesFn/shared/mappers.js";

export default function About({ languages }) {
  return (
    <>
      <Box
        sx={{
          padding: "1rem",
          width: { xs: "100%", sm: "70%" },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: '2rem', sm: '3rem' }
          }}>
          Where lingua lovers exchange their native language and teaching fun
          among themselves
        </Typography>
      </Box>

      <Image src="/illustrations/people.svg" width="100%" alt="Peple of any mental and phisical sitation" />

      <Typography variant="h5"
                sx={{
                  padding: "1rem",
                  width: { xs: "100%", sm: "70%" },
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
      >
        Our vision in Linguallama is to provide an open global community of
        multi language speakers worldwide in order to educate, network, and
        immerse culturally and linguistically.
      </Typography>

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
