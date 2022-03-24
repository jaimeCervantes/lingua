import {
  Box,
  Typography,
  Chip,
  Avatar,
  useTheme,
  useMediaQuery
} from "@mui/material";

import LlamaEvent from "../components/LlamaEvent/LlamaEvent";

export { getServerSideProps } from "../pagesFn/home/functions.js";

export default function Home({ events, languages }) {
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Typography
        variant="h1"
        sx={(theme) => ({
          fontFamily: "Bangers",
          textAlign: "center",
          padding: "2rem",
          wordBreak: "break-word",
          fontSize: { xs: "2rem", sm: "6rem" },
          paddingTop: "0",
        })}
      >
        Welcome to LinguaLlama!
      </Typography>

      <Box
        sx={{
          width: { xs: "100%", sm: "80%" },
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "0 auto",
        }}
      >
        {languages.map((item) => {
          return (
            <Chip
              key={item.label}
              label={item.label}
              sx={{
                margin: "0.5rem 0.5rem",
                backgroundColor: "white",
                border: "1px solid #ccc",
              }}
              avatar={
                <Avatar
                  loading="lazy"
                  src={
                    item.img
                      ? item.img
                      : `https://flagcdn.com/w40/${item.flagCode.toLowerCase()}.png`
                  }
                  srcSet={
                    item.img
                      ? null
                      : `https://flagcdn.com/w80/${item.flagCode.toLowerCase()}.png 2x`
                  }
                  alt={item.label}
                />
              }
            ></Chip>
          );
        })}
      </Box>

      <Box>
        <Typography
          variant="h2"
          sx={(theme) => ({
            fontFamily: "Bangers",
            textAlign: "center",
            padding: "2rem",
            wordBreak: "break-word",
          })}
        >
          Current Events
        </Typography>

        <Box
          display="grid" gridTemplateColumns={ isLessSm ? '1fr' : 'repeat(3, 1fr)'} gap={3}
        >
          {events.map((item) => <LlamaEvent event={item} key={item.img}></LlamaEvent>)}
        </Box>
      </Box>
    </>
  );
}