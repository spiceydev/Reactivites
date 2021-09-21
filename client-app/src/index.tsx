import { createBrowserHistory } from 'history';
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import { store, StoreContext } from './app/stores/store';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Router>,
  document.getElementById('root')
);
