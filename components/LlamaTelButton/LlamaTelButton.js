import { Button, Box } from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'


export default function LlamaTelButton({ children }) {
  return (
    <Button variant="text"
    sx={{
      color: 'white',
      fontSize: '1.5rem',
      fontFamily: 'Bangers',
    }}
    href="tel:+12018380698"
  >
    <PhoneInTalkIcon sx={{ marginLeft: '0.5rem' }}/>
    <Box
      component="span"
      sx={{ display: { xs: 'none', sm: 'inline' }}}
    >
      +1 201 838 0698
    </Box>
    {children}
  </Button>
  );
}