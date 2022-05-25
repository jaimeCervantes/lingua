import { useEffect, useState } from 'react';
import { Paper, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { LlamaChipLanguage } from 'components/LlamaChipLanguages/LlamaChipLanguages';


export default function LlamaSelectedClassSummary({ sx, prices = [], ...rest }) {
  const [price, setPrice] = useState({});
  const { name, image, language, flagCode, selectedSchedule } = rest;

  useEffect(() => {
    if (prices.length) {
      setPrice(prices[0]);
    }
  }, [prices])

  return (
    <Paper
      elevation={10}
      sx={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
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

      <ToggleButtonGroup
        value={price}
        exclusive
        color="primary"
        onChange={(e, payload) => {
          if (payload !== null) {
            setPrice(payload);
          }
        }}
      >
        {
          prices.map(item => {
            return (
              <ToggleButton
                key={item.id}
                value={item}
              >
                {item.type === 'subscription' ? 'Subscription' : 'One time'}
              </ToggleButton>
            );
          })
        }
      </ToggleButtonGroup>

      <Typography variant="p" sx={{ visibility: selectedSchedule.start ? 'visible' : 'hidden'}}>
        {formatDate(selectedSchedule.start)} to {formatDate(selectedSchedule.end).split(' ')[4]}
      </Typography>

      <form action="/api/checkoutSession" method="POST" style={{ visibility: selectedSchedule.start ? 'visible' : 'hidden'}}>
        <input type="hidden" name="priceId" value={price.id} />
        <input type="hidden" name="mode" value={price.type} />
        <input type="hidden" name="metadata" value={JSON.stringify(selectedSchedule)} />
        <input type="hidden" name="description" value={createDescription(name, selectedSchedule)} />

        <Typography variant="h6" component="p"> ${price.amount} {price.currency}</Typography>
        <Button type="submit" variant="contained" color="primary" size="large">Pay</Button>
      </form>
     
    </Paper>
  );
}

function createDescription(name, schedule) {
  return `${name} From ${formatDate(schedule.start)} to ${formatDate(schedule.end)}`;
}

function formatDate(date) {
  if (date) {
    return date.toUTCString().replace(/\:00\s/g, ' ').replace(' GMT', '');
  }

  return '';
}