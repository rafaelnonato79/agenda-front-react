import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import Form from './components/form';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="container">
      <h1 className="mb-5 d-flex justify-content-center">Agenda</h1>
     <App/>
    </div>
  </React.StrictMode>
);