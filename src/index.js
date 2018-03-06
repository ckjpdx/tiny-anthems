import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
Amplify.configure(aws_exports);
