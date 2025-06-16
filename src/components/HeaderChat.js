import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const HeaderChat = ({ contactName, showBack }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="secondary" sx={{ backgroundColor: '#1565c0' }}>
      <Toolbar>
        {showBack && (
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6">{contactName}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderChat;
