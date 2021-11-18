import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { configureStore } from "./store";


ReactDOM.render(
  <React.StrictMode>
       <CssBaseline />
      <Provider store={configureStore()}>
    <App />
  </Provider>  

  </React.StrictMode>,
  document.getElementById('root')
);

