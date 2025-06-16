import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatListPage from './pages/ChatListPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Router basename="/react-chatlist">
      <Routes>
        {/* Redirect a una chatlist di default */}
        <Route path="/" element={<Navigate to="/chatlist/1" replace />} />

        {/* Rotte richieste */}
        <Route path="/chatlist/:id_chatlist" element={<ChatListPage />} />
        <Route path="/chatlist/:id_chatlist/chat/:id_chat" element={<ChatPage />} />

        {/* Fallback in caso di path non trovata */}
        <Route path="*" element={<h2 style={{ padding: '2rem' }}>404 - Pagina non trovata</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

