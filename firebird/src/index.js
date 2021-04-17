import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#E15F00",
    },
    secondary: {
      main: "#999"
    },
    active: {
      // main: "#E15F00"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
