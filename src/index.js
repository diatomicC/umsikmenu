import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import MenuDetail from "./MenuDetail";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQwFr3AgfcJ9QvfitEEm06ykT0qLkZbE0",
  authDomain: "umsikmenu.firebaseapp.com",
  projectId: "umsikmenu",
  storageBucket: "umsikmenu.appspot.com",
  messagingSenderId: "459338866882",
  appId: "1:459338866882:web:d1c891d662a720d72f9b5b",
  measurementId: "G-T1ERLC6X5X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/MenuDetail" element={<MenuDetail/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
