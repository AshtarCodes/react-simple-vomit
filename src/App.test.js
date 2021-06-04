import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// a test that checks if the App component (and therefore, the entire application is rendering correctly)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
