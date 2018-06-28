import React from 'react';
import { Route } from 'react-router-dom';
import Slate from './containers/Slate';
import HomePage from './containers/HomePage';
import './App.css';
import './bulma.css';

const App = () => (
  <div className="slatecontainer">
    <Slate>
      <Route path="/" exact component={HomePage} />
    </Slate>
  </div>
);

export default App;
