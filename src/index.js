import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App component containing all other componenets in our App
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// The render method takes in the components to render, and then a location to render it to. The App componenet is being rendered to a div with the Id of "root" which is an element in the html. 
ReactDOM.render(<App />, document.getElementById('root'));
// a service worker is recruited to help serve cached content in the browser, and for offline use. 
registerServiceWorker();
