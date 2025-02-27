import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById(document.currentScript.attributes["data-id"].value));
root.render(
  <React.StrictMode>
    <App id={document.currentScript.attributes["data-id"].value} />
  </React.StrictMode>
);
