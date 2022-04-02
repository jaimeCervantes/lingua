import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#950101',
    },
    secondary: {
      main: '#110000',
    },
    warning: {
      main: '#FFC900'
    },
    error: {
      main: red.A400,
    },
    tertiary: {
      main: '#FAF7F4',
      light: '#ffffff',
      dark: '#d8d8d8',
      contrastText: '#ffffff'
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
      '"Bangers"',
      '"Helvetica Neue"',
      'Arial',
    ].join(','),
    h1: {
      fontFamily: "Bangers",
      textAlign: "center",
      padding: "2rem",
      wordBreak: "break-word",
      fontSize:  "6rem",
      paddingTop: "0",
    },
    h2: {
      fontFamily: "Bangers",
      textAlign: "center",
      padding: "2rem",
      wordBreak: "break-word",
    }
  },
  components: {
    MuiButton: {
      variants: [
      ],
    },
  },
});

export default theme;