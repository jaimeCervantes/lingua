import { Box, Typography } from "@mui/material";

import LlamaEmbeddedCalendar from "../components/LlamaEmbeddedCalendar/LlamaEmbeddedCalendar";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages";
import LlamaEventList from "../components/LlamaEventList/LlamaEventList";

export { getStaticProps } from "../pagesFn/home/functions.js";

export default function Events({ events, languages }) {
  return (
    <>
      <img 
        src="/illustrations/customer-interview.svg"
        style={{
          display: 'block',
          minWidth: '100px',
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '-8%'
        }}
      />
      <LlamaEventList events={events}></LlamaEventList>

      <Box>
        <Typography variant="h2">Calendars</Typography>

        <LlamaEmbeddedCalendar
          sx={{ marginBottom: "1rem" }}
          src="https://calendar.google.com/calendar/embed?src=p4hbngft52jpv1jgojuoi5qjm4%40group.calendar.google.com&ctz=America%2FMexico_City"
        />

        <LlamaEmbeddedCalendar
          sx={{ marginBottom: "1rem" }}
          src="https://calendar.google.com/calendar/embed?src=d75eds8vnivm5cvoeg2r913l18%40group.calendar.google.com&ctz=America%2FMexico_City"
        />

        <LlamaEmbeddedCalendar
          sx={{ marginBottom: "1rem" }}
          src="https://calendar.google.com/calendar/embed?src=lquoh06ikbd3j0cnus0fa4gn64%40group.calendar.google.com&ctz=America%2FMexico_City"
        />
      </Box>

      <Typography variant="h2">Languages</Typography>

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </>
  );
}
