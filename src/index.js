import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { ModalContextProvider } from 'context/ModalContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalContextProvider>
    <BrowserRouter basename="/React_Modul_5-2">
      <App />
    </BrowserRouter>
  </ModalContextProvider>
);
