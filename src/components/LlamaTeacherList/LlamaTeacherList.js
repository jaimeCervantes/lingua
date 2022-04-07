import { Box, Paper, Avatar, Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import { LlamaChipLanguage } from 'components/LlamaChipLanguages/LlamaChipLanguages';
import LlamaBookingCalendar from 'components/LlamaBookingCalendar/LlamaBookingCalendar';
import Link from 'next/link'

export default function LlamaTeacherList({ teachers, sx }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      data-testid="LlamaTeacherList"
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${isLessMd ? 1 : 2}, 1fr)`,
        gap: 2,
        ...sx
      }}
    >
      {teachers.map((item, index) =>(<LlamaTeacher key={`item.slug-${index}`} {...item}></LlamaTeacher>))}
    </Box>
  );
}

function LlamaTeacher({ name, price, languages, avatar, intro, scheduleAvailable, slug, sx }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <Paper
      data-testid="LlamaTeacherList__LlamaTeacher"
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
        <Avatar
          loading="lazy"
          sx={{ width: '100px', height: '100px', marginBottom: '1rem' }}
          alt={name}
          src={avatar}
        ></Avatar>
        <Link href={slug}><Button variant="contained" sx={{ alignSelf: 'center' }}>Book</Button></Link>
      </Box>
      <Box>
        <Typography variant="h5">{name}</Typography>
        <Typography>{intro}</Typography>
        <Typography variant="h6" component="p"> I teach</Typography>
        {languages.map(item => (
          <LlamaChipLanguage
            key={item.label} {...item}
          >
          </LlamaChipLanguage>)
        )}
        <Typography variant="h6" component="p">Price</Typography>
        ${price} USD
      </Box>
      <Box>
        <p>Aquí tabs</p>
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
                start: '2022-04-10T20:00:00',
                end: '2022-04-10T21:00:00',
                editable: true
              },
              {
                start: '2022-04-10T22:00:00',
                end: '2022-04-1T23:00:00',
                editable: true
              }
            ]}
            eventClick={(e) => console.log(e)}
          ></LlamaBookingCalendar>
        </Box>
        
      </Box>
    </Paper>);
}