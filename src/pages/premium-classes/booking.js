import { Box, Paper, Typography } from "@mui/material";
import LlamaChipLanguages from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'

export default function Booking({ languages }) {
  
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
          <FullCalendar
            plugins={[ timeGridPlugin ]}
            expandRows={true}
            allDaySlot={false}
            initialView="timeGridWeek"
            initialDate={'2022-04-06'}
            aspectRatio={1}
            firstDay={new Date().getDay()}
            slotDuration="01:00:00"
            slotMinTime={`${new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()}:00:00`}
            nowIndicator={true}
            events={[
              {
                start: '2022-04-10T16:00:00',
                end: '2022-04-10T15:00:00',
                editable: true,
              }
            ]}
            eventClick={(e) => console.log(e)}
          ></FullCalendar>
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
