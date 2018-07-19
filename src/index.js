import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/global.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
