import { useEffect, useState } from 'react';
import { Box, Paper, Typography } from "@mui/material";
import LlamaChipLanguages from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";
import { useRouter } from 'next/router';
import LlamaBookingCalendar from "components/LlamaBookingCalendar/LlamaBookingCalendar";
import LlamaSelectedClassSummary from '../../components/LlamaClasses/LlamaSelectedClassSummary';

export default function Booking({ languages }) {
  const router = useRouter();
  const [selectedPaidClass, setSelectedPaidClass] = useState({});
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    setSelectedPaidClass(JSON.parse(sessionStorage.getItem('selectedPaidClass')))
  }, []);

  function onSelectSchedule(e) {
    setSelectedSchedule(e.event._instance.range);
  }

  return (
    <>
      <Box data-testid="booking-content">
        <Typography variant="h2">Booking</Typography>
        <Paper sx={{
            '& .fc .fc-col-header-cell-cushion, .fc .fc-timegrid-slot-label': {
              fontSize: '0.8rem',
              fontWeight: 'normal'
            },
            padding: '1rem'
          }}>
            <LlamaBookingCalendar
              events={selectedPaidClass?.availableSchedules || []}
              eventClick={onSelectSchedule}
              slotMinTime='00:00'
            ></LlamaBookingCalendar>
          </Paper>
        
        <Typography variant="h2">Languages</Typography>
        <LlamaChipLanguages languages={languages}></LlamaChipLanguages>
      </Box>
      <LlamaSelectedClassSummary
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          zIndex: 20,
          left: 0,
        }}
        {...selectedPaidClass}
        
        selectedSchedule={selectedSchedule}
        
      ></LlamaSelectedClassSummary>
    </>
  );
}

export async function getStaticProps() {
  const languages = await getLanguages();

  return {
    props: { languages: mapLanguagesToUI(languages.data), }
  }
}
