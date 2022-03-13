import { Typography, Grid, Button, Box } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import Link from 'next/link'
import styles from './LlamaTourDates.module.css';

export default function LlamaTourDates({ tours, title, bookText, enterText }) {
  return (
    <section className={styles.linguaTourDates}>
      <header className={`${styles.header} ${styles.fadeIn}`}>
        <Typography 
          variant="h2"
        >
          {title}
          <Button
            sx={{ marginLeft: '1.5rem', height: '60px'}}
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<CalendarMonthIcon fontSize="large"/>}
          >
            {bookText}
          </Button>
        </Typography>
      </header>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {tours.map((item) => (
          <Grid item xs={12} sm={6} key={item.title}>
            <Typography variant="h5" component="p" sx={{textAlign: 'center'}}>
              <Button
                className={`${styles.item} ${styles.fadeIn}`}
                variant="outlined"
                size="large"
                sx={{ fontSize: '1.4rem', textTransform: 'capitalize', transitionDuration: '0.4s', transitionProperty: 'transform' }}
              >
                {item.title}
              </Button>
            </Typography>
          </Grid>
        ))}
      </Grid>
      
      <Box className={`${styles.enterContainer} ${styles.fadeIn}`}>
        <Link href="/home">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ height: '60px' }}
            startIcon={<DoorSlidingIcon />}
          >
            {enterText}
          </Button>
        </Link>
      </Box>
    </section>
  );
}