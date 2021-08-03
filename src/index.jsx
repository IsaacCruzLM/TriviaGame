import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // REDUX
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'; // REDUX
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
