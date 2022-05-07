import { useEffect, useState } from 'react';
import { Box, Paper, Typography } from "@mui/material";
import LlamaChipLanguages from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";
import LlamaBookingCalendar from "components/LlamaBookingCalendar/LlamaBookingCalendar";
import LlamaSelectedClassSummary from 'components/LlamaClasses/LlamaSelectedClassSummary';

import { useMatchedSchedules } from 'pagesFn/premium-classes/booking/hooks';

export default function Booking({ languages }) {
  const [ selectedSchedule, setSelectedSchedule ] = useState(null);
  const [selectedPaidClass, setSelectedPaidClass] = useState({});
  const { id, availableSchedules: recurringEvents } = selectedPaidClass;
  const matchedSchedules = useMatchedSchedules(id, recurringEvents);

  useEffect(() => {
    setSelectedPaidClass(JSON.parse(sessionStorage.getItem('selectedPaidClass')));
  }, []);
  
  function onSelectSchedule(e) {
    const extendedProps = e.event._def.extendedProps;

    if (extendedProps.isSelectable === false) {
      return;
    }

    setSelectedSchedule({
      ...e.event._instance.range,
      scheduleId: e.event._def.publicId,
      availableSeats: extendedProps.availableSeats,
      capacity: extendedProps.capacity
    });
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
            padding: '1rem',
            '& .fc .llama-fc-not-available': {
              backgroundColor: 'primary.main',
              borderColor: 'primary.main',
              cursor: 'normal'
            },
            '& .fc .llama-fc-available': {
              cursor: 'pointer'
            }
          }}>
            <LlamaBookingCalendar
              events={matchedSchedules}
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

export async function getServerSideProps() {
  const languages = await getLanguages();

  return {
    props: { languages: mapLanguagesToUI(languages.data), }
  }
}
