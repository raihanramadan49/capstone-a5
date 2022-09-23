import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActiveAccess from './routes/activeaccess';
import ActiveCard from './routes/activecard';
import Analytics from './routes/analytics';
import History from './routes/history';
import Register from './routes/register';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div className='container'>
      <App />
      <Routes>
        <Route path="analytics" element={<Analytics />} />
        <Route path="activeaccess" element={<ActiveAccess />} />
        <Route path="activecard" element={<ActiveCard />} />
        <Route path="history" element={<History />} />
        <Route path="register" element={<Register />} />
      </Routes>
  </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
