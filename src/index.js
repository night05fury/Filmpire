import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './app/store';

import App from './components/App';
import ToggleDarkMode from './utils/ToggleDarkMode';

const theme = createTheme({});

ReactDOM.render(
  <Provider store={store}>
    <ToggleDarkMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </ToggleDarkMode>,
  </Provider>,
  document.getElementById('root'),
);
