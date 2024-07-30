import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import 'animate.css';
import 'lightgallery/css/lightgallery-bundle.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Sắp xếp theo thứ tự
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'lightgallery/react/Lightgallery.es5';
import 'lightgallery/react/Lightgallery.umd';

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
