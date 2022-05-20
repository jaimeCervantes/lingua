import { useEffect, useReducer } from 'react';
import { Box, Paper, Typography } from "@mui/material";
import LlamaChipLanguages from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import LlamaBookingCalendar from "components/LlamaBookingCalendar/LlamaBookingCalendar";
import LlamaSelectedClassSummary from 'components/LlamaClasses/LlamaSelectedClassSummary';

import { useMatchedSchedules } from 'pagesFn/premium-classes/booking/hooks';
import reduceBooking from 'pagesFn/premium-classes/booking/reducer';
import { initialState, createInitState } from 'pagesFn/premium-classes/booking/state';
import { showSchedulesOfCurrentWeek } from 'pagesFn/premium-classes/booking/functions';

export default function Booking({ languages }) {
  const [ state, dispatch ] = useReducer(reduceBooking, initialState, createInitState);
  const {
    selectedSchedule,
    selectedPaidClass,
    matchedSchedules,
    isRequestingSchedules,
    fromDate,
  } = state;
  const { id, availableSchedules: recurringEvents } = selectedPaidClass;

  useEffect(() => {
    dispatch({ type: 'isRequestingSchedules', payload: true });
  }, []);
  
  const matches = useMatchedSchedules(id, recurringEvents, isRequestingSchedules, fromDate);

  useEffect(() => {
    if (matches.length) {
      dispatch({ type: 'updateMatchedSchedules', payload: matches });
      dispatch({ type: 'isRequestingSchedules', payload: false });
    }
  }, [matches]);

  function onSelectSchedule(e) {
    const extendedProps = e.event._def.extendedProps;

    if (extendedProps.isSelectable === false) {
      return;
    }

    dispatch({
      type: 'updateSelectedSchedule',
      payload: {
        ...e.event._instance.range,
        scheduleId: e.event._def.publicId,
        availableSeats: extendedProps.availableSeats,
        capacity: extendedProps.capacity
      }
    });
  }

  const startDate = fromDate.toJSON().split('T')[0];

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
              events={matchedSchedules[startDate]}
              eventClick={onSelectSchedule}
              onNext={(e) => {
                showSchedulesOfCurrentWeek(fromDate, 'next', dispatch, matchedSchedules);
              }}
              onPrev={(e) => {
                showSchedulesOfCurrentWeek(fromDate, 'prev', dispatch, matchedSchedules);
              }}
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

export { getServerSideProps } from 'pagesFn/premium-classes/booking/functions';
