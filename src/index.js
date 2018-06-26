import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/all.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
