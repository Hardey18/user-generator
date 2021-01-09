import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UsersProvider } from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
