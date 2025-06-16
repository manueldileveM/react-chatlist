import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const HeaderMain = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6">Messaggi</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMain;