import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './Components/utils/global.context';

 // Asegúrate de importar tu ContextProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider> {/* Envuelve tu aplicación con el ContextProvider */}
      <App />
    </ContextProvider>
  </React.StrictMode>
);
