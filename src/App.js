import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Slate from './containers/Slate';
import HomePage from './containers/HomePage';
import './App.css';

const App = () => (
  <div>
    <Slate>
      <Route path="/" exact component={HomePage} />
    </Slate>
  </div>
);

export default App;
