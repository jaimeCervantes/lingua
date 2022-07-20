import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      light: '#950101',
      dark: '#d8d8d8',
      contrastText: '#000000'
    },
    secondary: {
      main: '#110000',
      light: '#cccccc',
      dark: '#d8d8d8',
      contrastText: '#ffffff'
    },
    warning: {
      main: '#FFC900'
    },
    error: {
      main: red.A400,
    },
    tertiary: {
      main: '#950101',
      light: '#ffffff',
      dark: '#d8d8d8',
      contrastText: '#000000'
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
    body1: {
      color: '#fff'
    },
    body2: {
      color: "#fafafa"
    },
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