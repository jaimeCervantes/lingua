import { Box, Paper, Avatar, Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import { LlamaChipLanguage } from 'components/LlamaChipLanguages/LlamaChipLanguages';
import LlamaBookingCalendar from 'components/LlamaBookingCalendar/LlamaBookingCalendar';
import Link from 'next/link'

export default function LlamaPaidClassList({ teachers, sx }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      data-testid="LlamaPaidClassList"
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${isLessMd ? 1 : 2}, 1fr)`,
        gap: 2,
        ...sx
      }}
    >
      {teachers.map((item) =>(<LlamaPaidClass key={item.id} {...item}></LlamaPaidClass>))}
    </Box>
  );
}

function LlamaPaidClass({ id, description, name, price, language, image, schedules, flagCode, sx }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'))

  const date = new Date()
  const eventStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 1);
  const eventEnd = new Date(eventStart.getFullYear(), eventStart.getMonth(), eventStart.getDate(), eventStart.getHours() + 1); 
  
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
        <Link href={'/premium-classes/booking'}><Button variant="contained" sx={{ alignSelf: 'center' }}>Book</Button></Link>
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
            slotMaxTime={`${new Date().getHours() + 5 > 9 ? new Date().getHours() + 5 : '0' + new Date().getHours() + 5}:00:00`}
            events={[
              {
                start: eventStart,
                end: eventEnd,
                editable: true
              }
            ]}
            eventClick={(e) => console.log(e)}
          ></LlamaBookingCalendar>
        </Box>
        
      </Box>
    </Paper>);
}