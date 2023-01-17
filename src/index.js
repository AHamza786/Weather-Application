import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM  from 'react-dom';

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
    document.getElementById('root')
  );


reportWebVitals();
