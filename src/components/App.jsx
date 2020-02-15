import React from 'react';
import 'reset-css';
import { Header } from './Header';
import { ThemeProvider, Container, Grid } from '@material-ui/core';
import { AppTheme } from './AppTheme';
import { Stats } from './Stats';
import { BarsContainer } from './BarsContainer';
import { Options } from './Options';
import { Provider } from 'react-redux';
import { store } from '../_reducers';
import '../styles/global.css';
import '../styles/material.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
