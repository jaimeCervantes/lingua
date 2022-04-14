import { Box, Button, Paper, Typography, Avatar, useTheme, useMediaQuery } from "@mui/material";
import LlamaChipLanguages, { LlamaChipLanguage } from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

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
  const router = useRouter();
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));
  const query = router.query;

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if(query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if(query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }

  }, []);
  
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
          {query.success &&
            <Typography variant="h6">Congratulations, you have a scheduled premium class</Typography>
          }


          {query.canceled && <Typography variant="h6">The payment was canceled</Typography>}

          <Link href="/premium-classes">
            <Button color="secondary" variant="contained">Go to premium classes</Button>
          </Link>
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
