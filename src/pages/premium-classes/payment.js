import { Box, Button, Paper, Typography, Avatar, useTheme, useMediaQuery } from "@mui/material";
import LlamaChipLanguages, { LlamaChipLanguage } from "components/LlamaChipLanguages/LlamaChipLanguages.js";
import { getLanguages } from "pagesFn/shared/functions.js";
import { mapLanguagesToUI } from "pagesFn/shared/mappers.js";
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Payment({ languages }) {
  const router = useRouter();
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));
  const query = router.query;

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
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

  return {
    props: { languages: mapLanguagesToUI(languages.data), }
  }
}
