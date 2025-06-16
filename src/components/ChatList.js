import React from 'react';
import { Typography } from '@mui/material';
import { List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const ChatList = ({ chats }) => {
  const { id_chatlist } = useParams();

  return (
    <List sx={{ backgroundColor: '#ffffff', height: '100%', overflowY: 'auto' }}>
      {chats.map((chat) => (
        <ListItem
          button
          component={Link}
          to={`/chatlist/${id_chatlist}/chat/${chat.id}`}
          key={chat.id}
          sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}
        >
          <ListItemAvatar>
            <Avatar>{chat.name.charAt(0)}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight="bold">{chat.name}</Typography>}
            secondary={chat.lastMessage}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
