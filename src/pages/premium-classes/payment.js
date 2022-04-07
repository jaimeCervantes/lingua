import { Box, Button, Paper, Typography, Avatar, useTheme, useMediaQuery, TextField, Autocomplete } from "@mui/material";
import LlamaChipLanguages, { LlamaChipLanguage } from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";

const teacher = {
  name: 'Jaime Cervantes',
  avatar: 'https://res.cloudinary.com/jaime-lingua/image/upload/v1648078261/small_free_spanish_classes_1000_6e6adaf4a4.jpg',
  slug: '/premium-classes/booking',
  languages: [{ label: 'English', flagCode: 'us', img: null }],
  intro: 'Hello I am jaime and and I like avocado',
  scheduleAvailable: [{ date: '04-29-2022', time: '08:00 00' }],
  price: '15.00'
};

export default function Payment({ languages }) {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <Box data-testid="payment-content">
      <Typography variant="h2">Payment</Typography>
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isLessMd ? '1fr' : '2fr 1fr',
          gap: 2
        }}
      >
        <Paper
          sx={{
            '& .MuiTextField-root': {
              marginBottom: '1rem', 
              marginRight: '0.5rem',
              width: '32%'
            },
            '& .MuiTypography-root': {
              marginBottom: '1rem',
            }
          }}
        >
          <Typography variant="h3" component="p">Pay width card</Typography>

          <TextField variant="filled" label="E-mail" type="email" ></TextField>

          <Typography variant="h5" component="p">Card Information</Typography>
          <TextField variant="filled" label="Card number"></TextField>
          <TextField variant="filled" label="CC expiration"></TextField>
          <TextField variant="filled" label="CVC"></TextField>
          <Typography variant="h5" component="p">Country</Typography>
          <Autocomplete
            variant="filled"
            options={['United States', 'México']}
            renderInput={(params) => <TextField {...params} variant="filled" autocomplete="off" label="Country" />}
          ></Autocomplete>
          <Box sx={{
            textAlign: 'center'
          }}>
            <Button 
              variant="contained" color="primary" size="large"
              sx={{ width: '33%', marginTop: '2rem' }}
            >Pay</Button>
          </Box>
        </Paper>

        <Paper
          sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <Avatar
            loading="lazy"
            sx={{ width: '100px', height: '100px', marginBottom: '1rem' }}
            alt={teacher.name}
            src={teacher.avatar}
          ></Avatar>
          <Typography variant="h5">{teacher.name}</Typography>
          <Typography>{teacher.intro}</Typography>
          <Typography variant="h6" component="p">Class name</Typography>
          {teacher.languages.map(item => (
            <LlamaChipLanguage
              key={item.label} {...item}
            >
            </LlamaChipLanguage>)
          )}
          <Typography variant="h6" component="p">Saturday, April 10th, 15:00hrs - 16:00hrs</Typography>
          <Typography variant="h6" component="p">Price</Typography>
          ${teacher.price} USD
        </Paper>
      </Box>
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
