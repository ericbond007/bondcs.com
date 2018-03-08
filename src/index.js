import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
  } else {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      rootElement
    );
  }

registerServiceWorker();
