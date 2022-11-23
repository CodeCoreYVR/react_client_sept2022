import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode is a development only component.  We might get rid of this later.  But what it does
  //is it will search through the React components that you write, and it will tell you if there are
  //things you need to fix. It will give you hints.
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //App here is the root component.  That is because of how React is structured.  There is always 
  //one main component that renders out all of the rest of the components
  //So App is the very first component we will have, and it will have children, and
  //the children will have children, etc.  This is a tree of components

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
