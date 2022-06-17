import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEuEKYPDW_eiHAqCPQ4qedY0rSfMtK2OQ",
  authDomain: "coderhouse-react-ecommer-25d4b.firebaseapp.com",
  projectId: "coderhouse-react-ecommer-25d4b",
  storageBucket: "coderhouse-react-ecommer-25d4b.appspot.com",
  messagingSenderId: "1070144099613",
  appId: "1:1070144099613:web:f7c39b0c8fbf0c8c6c7df4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
