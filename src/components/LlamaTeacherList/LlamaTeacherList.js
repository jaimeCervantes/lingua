import { Box, Paper, Avatar, Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import { LlamaChipLanguage } from '../LlamaChipLanguages/LlamaChipLanguages';

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
      {teachers.map(item =>(<LlamaTeacher key={item.slug} {...item}></LlamaTeacher>))}
    </Box>
  );
}

function LlamaTeacher({ name, price, languages, avatar, intro, scheduleAvailable, sx }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <Paper
      data-testid="LlamaTeacherList__LlamaTeacher"
      sx={{
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: isLessMd ? '1fr' : '1fr 2fr 2fr',
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
        <Button variant="contained" sx={{ alignSelf: 'center' }}>Book</Button>
      </Box>
      <Box>
        <Typography variant="h5">{name}</Typography>
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
        <p>{intro}</p>
        <p>{scheduleAvailable.map(item => item.date)}</p>
        
      </Box>
    </Paper>);
}