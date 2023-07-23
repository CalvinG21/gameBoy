import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from 'react-router-dom' 
// Importing the Provider component from react-redux, which we will require to
// set up our Redux store. To ensure the whole application has access
// to the relevant slices of state, each component will require it to function
// correctly.
import { Provider } from "react-redux";
// Importing the newly created store implementation we have just created using
// the configureStore function.
import store from "./reduxStore/store";


//In a typical React application, the Provider component is usually nested within the BrowserRouter component. 
//The Provider component is used for state management libraries like Redux, and the BrowserRouter component is used for client-side routing.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
