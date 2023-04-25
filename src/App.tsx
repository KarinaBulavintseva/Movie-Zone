import React from 'react';
import Header from './containers/Header/Header';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/themes/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </>
  );
};

export default App;
