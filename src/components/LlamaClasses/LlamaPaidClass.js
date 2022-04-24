import { useState} from 'react';
import { Box, Paper, Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import { LlamaChipLanguage } from 'components/LlamaChipLanguages/LlamaChipLanguages';
import LlamaBookingCalendar from 'components/LlamaBookingCalendar/LlamaBookingCalendar';
import { useRouter } from 'next/router';

import { createDateTimesFromSchedules, createMiniCalendarMaxTime } from 'components/LlamaClasses/functions';

export default function LlamaPaidClass({ sx, schedules, ...rest }) {
  const { description, name, price, language, image, flagCode } = rest;
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const availableSchedules = createDateTimesFromSchedules(schedules);

  function onBook(e) {
    sessionStorage.setItem(
      'selectedPaidClass',
      JSON.stringify({
        ...rest,
        availableSchedules,
      })
    );
    router.push('/premium-classes/booking/');
  }
  
  return (
    <Paper
      data-testid="LlamaPaidClassList__LlamaPaidClass"
      sx={{
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: isLessMd ? '1fr' : '1fr 1.5fr 3fr',
        gap: 1,
        ...sx
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          width="100%"
          style={{ marginBottom: '1rem' }}
        />
        <Button onClick={onBook} variant="contained" sx={{ alignSelf: 'center' }}>Book</Button>
      </Box>
      <Box>
        <Typography variant="h5">{name}</Typography>
        <Typography>{description}</Typography>
        <Typography variant="h6" component="p"> I teach</Typography>
        <LlamaChipLanguage
          label={language}
          flagCode={flagCode}
        >
        </LlamaChipLanguage>
        <Typography variant="h6" component="p">Price</Typography>
        ${price} USD
      </Box>
      <Box>
        <Box sx={{
          '& .fc .fc-toolbar': {
            display: 'none',
          },
          '& .fc .fc-col-header-cell-cushion, .fc .fc-timegrid-slot-label': {
            fontSize: '0.8rem',
            fontWeight: 'normal'
          },
 
        }}>
          <LlamaBookingCalendar
            height={200}
            slotMaxTime={createMiniCalendarMaxTime()}
            events={availableSchedules}
          ></LlamaBookingCalendar>
        </Box>
        
      </Box>
    </Paper>);
}
