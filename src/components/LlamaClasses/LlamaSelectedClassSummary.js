import { Paper, Typography, Box, Button } from '@mui/material';
import { LlamaChipLanguage } from 'components/LlamaChipLanguages/LlamaChipLanguages';


export default function LlamaSelectedClassSummary({ sx, ...rest }) {
  const { name, image, price, priceId, description, language, flagCode, selectedSchedule } = rest;

  return (
    <Paper
      elevation="10"
      sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center', 
      ...sx
    }}>
      <img
        loading="lazy"
        sx={{ width: '100px', height: '100px', marginBottom: '1rem', maxWidth: '200px' }}
        alt={name}
        width="100"
        src={image}
      />
      <Typography variant="h6">{name}</Typography>

      <LlamaChipLanguage label={language} flagCode={flagCode} />

      <Typography variant="p" sx={{ display: selectedSchedule ? 'block' : 'none'}}>
        From {selectedSchedule?.start?.toUTCString()} to {selectedSchedule?.end?.toUTCString()}
      </Typography>
      
      <Typography variant="h6" component="p"> ${price} USD</Typography>

      <form action="/api/checkoutSession" method="POST" style={{ display: selectedSchedule ? 'block' : 'none'}}>
        <input type="hidden" name="priceId" value={priceId}></input>
        <input
          type="hidden"
          name="description"
          value={`${name} From ${selectedSchedule?.start?.toUTCString()} to ${selectedSchedule?.end?.toUTCString()}`}
        >
        </input>

        <input type="hidden" name="metadata" value={JSON.stringify(selectedSchedule)}></input>
        
        <Box sx={{
          textAlign: 'center'
        }}>
          <Button 
          type="submit"
            variant="contained" color="primary" size="large"
          >Pay</Button>
        </Box>
      </form>
     
    </Paper>
  );
}