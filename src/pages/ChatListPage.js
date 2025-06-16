import React from 'react';
import { useParams } from 'react-router-dom';
import ChatList from '../components/ChatList';
import Layout from '../components/Layout';
import HeaderChat from '../components/HeaderChat';
import mockChats from '../data/mockData';

const ChatListPage = () => {
  const { id_chatlist } = useParams();

  // Trova la chat corrispondente all'id_chatlist
  const selectedChat = mockChats.find(chat => chat.id === id_chatlist);

  return (
    <Layout
      left={<ChatList chats={mockChats} />}
      right={null}
      headerRight={
        <HeaderChat
          contactName={selectedChat?.name || 'Seleziona una chat'}
          showBack={false}
        />
      }
    />
  );
};

export default ChatListPage;
