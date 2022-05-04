import { Paper, Typography, Box, Button } from '@mui/material';
import { LlamaChipLanguage } from 'components/LlamaChipLanguages/LlamaChipLanguages';


export default function LlamaSelectedClassSummary({ sx, ...rest }) {
  const { name, image, price, priceId, description, language, flagCode, selectedSchedule } = rest;

  return (
    <Paper
      elevation={10}
      sx={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 2fr 1fr',
      alignItems: 'center',
      justifyItems: 'center',
      gap: 1,
      padding: '1rem',
      ...sx
    }}>
      <img
        loading="lazy"
        sx={{ width: '100px', height: '100px', marginBottom: '1rem', maxWidth: '200px' }}
        alt={name}
        width="100"
        src={image}
      />
        
      <div>
        <Typography variant="h6">{name}</Typography>
        <LlamaChipLanguage label={language} flagCode={flagCode} />
      </div>

      <Typography variant="p" sx={{ display: selectedSchedule ? 'block' : 'none'}}>
        {formatDate(selectedSchedule?.start)} to {formatDate(selectedSchedule?.end).split(' ')[4]}
      </Typography>

      <form action="/api/checkoutSession" method="POST" style={{ display: selectedSchedule ? 'block' : 'none'}}>
        <input
          type="hidden"
          name="priceId"
          defaultValue={priceId}
        >
          
        </input>
        <input
          type="hidden"
          name="description"
          defaultValue={`${name} From ${formatDate(selectedSchedule?.start)} to ${formatDate(selectedSchedule?.end)}`}
        >
        </input>

        <input type="hidden" name="metadata" value={JSON.stringify(selectedSchedule)}></input>
        
        <Typography variant="h6" component="p"> ${price} USD</Typography>
          <Button 
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Pay
          </Button>
      </form>
     
    </Paper>
  );
}

function formatDate(date) {
  if (date) {
    return date.toUTCString().replace(/\:00\s/g, ' ').replace(' GMT', '');
  }

  return '';
}