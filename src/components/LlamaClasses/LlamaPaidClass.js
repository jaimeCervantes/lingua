import { Box, Paper, Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import { LlamaChipLanguage } from 'components/LlamaChipLanguages/LlamaChipLanguages';
import LlamaBookingCalendar from 'components/LlamaBookingCalendar/LlamaBookingCalendar';

import { createDateTimesFromSchedules, createMiniCalendarMaxTime } from 'pagesFn/premium-classes/dateFunctions';

export default function LlamaPaidClass({ sx, schedules, onBook, ...rest }) {
  const { description, name, language, image, flagCode } = rest;
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));
  const availableSchedules = createDateTimesFromSchedules(schedules);
  
  return (
    <Paper
      data-testid="LlamaPaidClass"
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
        <Button
          data-testid="LlamaPaidClass__bookBtn"
          onClick={() => onBook({ ...rest, availableSchedules })}
          variant="contained"
          sx={{ alignSelf: 'center' }}
        >Book</Button>
      </Box>
      <Box>
        <Typography variant="h5">{name}</Typography>
        <Typography>{description}</Typography>
        <LlamaChipLanguage
          label={language}
          flagCode={flagCode}
        >
        </LlamaChipLanguage>
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
            events={availableSchedules}
            slotDuration={'04:00:00'}
            slotMinTime='00:00'
            eventTextColor="#3788d8"
          ></LlamaBookingCalendar>
        </Box>
        
      </Box>
    </Paper>);
}
