import React from 'react';
import { useParams } from 'react-router-dom';
import Chat from '../components/Chat';
import ChatList from '../components/ChatList';
import HeaderChat from '../components/HeaderChat';
import Layout from '../components/Layout';
import mockChats from '../data/mockData';

const ChatPage = () => {
  const { id_chatlist, id_chat } = useParams();
  const chat = mockChats.find(c => c.id === id_chat);

  return (
    <Layout
      left={<ChatList chats={mockChats} />}
      right={<Chat messages={chat.messages} />}
      headerRight={<HeaderChat contactName={chat.name} showBack={true} />}
    />
  );
};

export default ChatPage;