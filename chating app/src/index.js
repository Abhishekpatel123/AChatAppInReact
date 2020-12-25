import React from 'react';
import ReactDOM from 'react-dom';
import './images/man1.jpg';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
   <BrowserRouter>
      <App/>
   </BrowserRouter>
    , document.getElementById('root'));