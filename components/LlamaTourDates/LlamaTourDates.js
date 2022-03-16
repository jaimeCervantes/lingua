import { Typography, Grid, Button } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import styles from './LlamaTourDates.module.css';

export default function LlamaTourDates({ tours, title, bookText }) {
  return (
    <section className={styles.linguaTourDates}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {tours.map((item) => (
          <Grid item xs={12} sm={6} key={item.title}>
            <Typography variant="h5" component="p" sx={{textAlign: 'center'}}>
              <Button
                className={`${styles.item} ${styles.fadeIn}`}
                variant="outlined"
                size="large"
                sx={{
                  fontSize: '1.4rem',
                  textTransform: 'capitalize',
                  transitionDuration: '0.4s',
                  transitionProperty: 'transform'
                }}
                href="https://linguallama-store.mailchimpsites.com/"
                target="_blank"
              >
                {item.title}
              </Button>
            </Typography>
          </Grid>
        ))}
      </Grid>
      

      <footer className={`${styles.footer} ${styles.fadeIn}`}>
        <Button
          className="text-bold"
          sx={{ marginLeft: '1.5rem', height: '60px'}}
          variant="contained"
          color="warning"
          size="large"
          startIcon={<CalendarMonthIcon fontSize="large"/>}
          href="https://linguallama-store.mailchimpsites.com/"
        >
          {bookText}
        </Button>
      </footer>
    </section>
  );
}