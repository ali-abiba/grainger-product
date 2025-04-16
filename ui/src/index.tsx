import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

if (root) {
  const render = () => {
    ReactDOM.render(<App />, root);
  };

  render();

  // Enable Hot Module Replacement (HMR)
  if (module.hot) {
    module.hot.accept('./App', () => {
      render();
    });
  }
}