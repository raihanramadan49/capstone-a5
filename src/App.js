import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActiveAccess from './routes/activeaccess';
import ActiveCard from './routes/activecard';
import Analytics from './routes/analytics';
import History from './routes/history';
import Register from './routes/register';
import Dashboard from './routes/dashboard';
import Sidebar from './components/sidebar';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/activeaccess" element={<ActiveAccess />} />
          <Route path="/activecard" element={<ActiveCard />} />
          <Route path="/history" element={<History />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
);
};

export default App;
