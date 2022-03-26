import { Box, Typography, Paper } from "@mui/material";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages.js";

export { getServerSideProps } from "../pagesFn/home/functions.js";

export default function About({ languages }) {
  return (
    <>
      <Typography
        variant="h1"
        sx={{ xs: "2rem", sm: "6rem", marginBottom: 0, paddingBottom: 0 }}
      >
        About
      </Typography>

      <Box
        sx={{
          padding: "1rem",
          width: { xs: "100%", sm: "70%" },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Where lingua lovers exchange their native language and teaching fun
          among themselves
        </Typography>
      </Box>

      <img src="/backgrounds/people.svg" width="100%"></img>

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
