import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import all react-icons
import * as icons from 'react-icons/ri';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);