import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let uniqueKey = -1;

let messageHandler = (event) => {
  if(event.data.type === "mount")
  {
    uniqueKey = event.data.id;
  }
  else if(event.data.type === "unmount" && uniqueKey === event.data.id)  
  {
    root.unmount();
    window.removeEventListener("message", messageHandler)
  }
}

window.addEventListener("message", messageHandler)
