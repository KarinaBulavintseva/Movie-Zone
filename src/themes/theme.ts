import { createTheme } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e80b16',
      contrastText: grey[800]
    },
    secondary: { main: '#9812aa' }
  },
  typography: {
    fontFamily: ['Poppins', 'normal'].join(',')
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: { cursor: 'pointer' }
      }
    }
  }
});

export default theme;
