import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {Provider} from 'react-redux';
import store from './store/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
  );
};

app();

reportWebVitals();