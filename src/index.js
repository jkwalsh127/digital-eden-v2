import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const theme = createTheme({
  palette: {
    legendRed: {
      main: "#ff5252"
    },
    legendBlue: {
      main: "#2a61ff"
    }
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        legendIcon: {
          fontSize: "large",
          paddingBottom: "10px"
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);