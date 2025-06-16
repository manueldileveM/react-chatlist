import React from 'react';
import { Box, Typography } from '@mui/material';

const Chat = ({ messages }) => {
  return (
    <Box p={2} sx={{ backgroundColor: '#f5f5f5', height: '100%', overflowY: 'auto' }}>
      {messages.map((msg, index) => (
        <Box key={index} mb={1} display="flex" justifyContent={msg.sender === 'Tu' ? 'flex-end' : 'flex-start'}>
          <Box
            sx={{
              backgroundColor: msg.sender === 'Tu' ? '#1976d2' : '#ffffff',
              color: msg.sender === 'Tu' ? '#fff' : '#000',
              p: 1.5,
              borderRadius: 2,
              maxWidth: '70%',
              boxShadow: 1
            }}
          >
            <Typography variant="body2" fontWeight="bold">{msg.sender}</Typography>
            <Typography variant="body2">{msg.text}</Typography>
            <Typography variant="caption" display="block" textAlign="right" mt={0.5}>{msg.time}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Chat;
