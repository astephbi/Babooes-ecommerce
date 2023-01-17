import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
