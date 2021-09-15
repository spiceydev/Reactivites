import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import { store, StoreContext } from './app/stores/store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Router>,
  document.getElementById('root')
);
