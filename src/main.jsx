import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDJQUW3CRxOINyF7yLFqTFuX_z_7aLUzPI",
  authDomain: "react-sanchez.firebaseapp.com",
  projectId: "react-sanchez",
  storageBucket: "react-sanchez.appspot.com",
  messagingSenderId: "248112907123",
  appId: "1:248112907123:web:1f967d58571c67d49f3b06"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
