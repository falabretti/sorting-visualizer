import React from 'react';
import 'reset-css';
import { Header } from './Header';
import { ThemeProvider, Container, Grid } from '@material-ui/core';
import { AppTheme } from './AppTheme';
import { Stats } from './Stats';
import '../styles/global.css';
import { BarsContainer } from './BarsContainer';
import { Options } from './Options';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Header />
      <Container maxWidth="lg">
        <Grid container justify="center" align="center" spacing={3}>
          <Stats />
          <BarsContainer />
          <Options />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
