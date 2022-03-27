import { Button, Box } from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'


export default function LlamaTelButton({ children, color, flexDirection, sx = {}, ...rest }) {
  return (
    <Button variant="text"
    sx={{
      color: color || 'secondary.main',
      fontSize: '1.5rem',
      fontFamily: 'Bangers',
      minWidth: { xs: '1rem', sm: 'unset' },
      ...sx
    }}
    href="tel:+12018380698"
    {...rest}
  >
    <PhoneInTalkIcon />
    <Box
      component="span"
      sx={ flexDirection === 'column' ? null : { display: { xs: 'none', sm: 'inline' }}}
    >
      +1 201 838 0698
    </Box>
    {children}
  </Button>
  );
}