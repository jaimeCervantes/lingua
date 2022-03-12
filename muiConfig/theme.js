import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#FFC900',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FAF7F4'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Ubuntu',
      '"Helvetica Neue"',
      'Arial',
    ].join(','),
    h2: {
      fontWeight: 700,
      letterSpacing: '-4px',
      color: '#ffffff'
    }
  },
});

export default theme;