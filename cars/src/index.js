import 'bulma/css/bulma.css';
import './styles.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const htmlElement = document.getElementById('root');
const root = createRoot(htmlElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
