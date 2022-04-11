import { Box, Paper, Typography } from "@mui/material";
import LlamaChipLanguages from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";
import { useRouter } from 'next/router';
import LlamaBookingCalendar from "components/LlamaBookingCalendar/LlamaBookingCalendar";

export default function Booking({ languages }) {
  const router = useRouter();

  const date = new Date()
  const eventStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 1);
  const eventEnd = new Date(eventStart.getFullYear(), eventStart.getMonth(), eventStart.getDate(), eventStart.getHours() + 1); 
  
  return (
    <Box data-testid="booking-content">
      <Typography variant="h2">Booking</Typography>
      <Typography variant="h4">Teacher: Jaime Cervantes</Typography>
      
      <Paper sx={{
          '& .fc .fc-col-header-cell-cushion, .fc .fc-timegrid-slot-label': {
            fontSize: '0.8rem',
            fontWeight: 'normal'
          },
          padding: '1rem'
        }}>
          <LlamaBookingCalendar
            events={[
              {
                start: eventStart,
                end: eventEnd,
                editable: true
              },
            ]}
            eventClick={(e) => {
              router.push('/premium-classes/payment')
            }}
          ></LlamaBookingCalendar>
        </Paper>
      
      <Typography variant="h2">Languages</Typography>
      <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
    </Box>
  );
}

export async function getStaticProps() {
  const languages = await getLanguages();
  //const teachers = await getTeachers();

  return {
    props: { languages: mapLanguagesToUI(languages.data), }
  }
}
