import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from 'routes';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <AppRoutes />
  </React.StrictMode>
);

