import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import App from './App.tsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={6000}
        placement="bottom-center"
      >
        <App />
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

