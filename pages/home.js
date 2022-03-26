import {
  Box,
  Typography,
  Chip,
  Avatar,
  useTheme,
  useMediaQuery,
  Paper
} from "@mui/material";

import LlamaEvent from "../components/LlamaEvent/LlamaEvent";

export { getServerSideProps } from "../pagesFn/home/functions.js";

export default function Home({ events, languages }) {
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));
  let repeat = 3;

  if (isLessMd) {
    repeat = 2;
  }

  if (isLessSm) {
    repeat = 1;
  }

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
          display="grid" gridTemplateColumns={`repeat(${repeat}, 1fr)`} gap={Math.max(repeat, 2)}
        >
          {events.map((item) => <LlamaEvent event={item} key={item.img}></LlamaEvent>)}
        </Box>
      </Box>
      <Paper sx={{ marginTop: '1rem', backgroundColor: 'white', padding: { sx: 0, sm: '1rem' } }}>
        <iframe
          style={{ width: '100%', height: '70vh', display: 'block' }}
          src="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23ffffff&ctz=America%2FMexico_City&title=Jaime's%20Calendar&src=amFpbWUuY2VydmFudGVzLnZlQGdtYWlsLmNvbQ&src=ZmFtaWx5MDkzMzE0Mjg5NDUzOTgzNzgzOTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZXMubWV4aWNhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23F6BF26&color=%23009688"
          frameBorder="0"
          scrolling="no"
        >  
        </iframe>
      </Paper>
    </>
  );
}