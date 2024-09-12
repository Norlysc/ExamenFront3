// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './Components/utils/global.context'; // Asegúrate de que la ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider> {/* Usar AppContextProvider */}
      <App />
    </ContextProvider>
  </React.StrictMode>
);
