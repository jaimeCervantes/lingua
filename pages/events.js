import { Box, Typography } from "@mui/material";

import LlamaEmbeddedCalendar from "../components/LlamaEmbeddedCalendar/LlamaEmbeddedCalendar";
import LlamaChipLanguages from "../components/LlamaChipLanguages/LlamaChipLanguages";
import LlamaEventList from "../components/LlamaEventList/LlamaEventList";
import LlamaIllustration from "../components/LlamaIllustration/LlamaIllustration";

export { getStaticProps } from "../pagesFn/home/functions.js";

export default function Events({ events, languages }) {
  return (
    <>
      <LlamaIllustration src="/illustrations/customer-interview.svg" />

      <LlamaEventList events={events}></LlamaEventList>

      <Box>
        <Typography variant="h2">Calendars</Typography>

        <LlamaEmbeddedCalendar
          sx={{ marginBottom: "1rem" }}
          src="https://calendar.google.com/calendar/embed?src=p4hbngft52jpv1jgojuoi5qjm4%40group.calendar.google.com"
        />

        <LlamaEmbeddedCalendar
          sx={{ marginBottom: "1rem" }}
          src="https://calendar.google.com/calendar/embed?src=d75eds8vnivm5cvoeg2r913l18%40group.calendar.google.com"
        />

        <LlamaEmbeddedCalendar
          sx={{ marginBottom: "1rem" }}
          src="https://calendar.google.com/calendar/embed?src=lquoh06ikbd3j0cnus0fa4gn64%40group.calendar.google.com"
        />
      </Box>

      <Typography variant="h2">Languages</Typography>

      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </>
  );
}
