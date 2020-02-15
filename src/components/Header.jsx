import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6">Sorting Visualizer</Typography>
      </Toolbar>
    </AppBar>
  );
}

export { Header };