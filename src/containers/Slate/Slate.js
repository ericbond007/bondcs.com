import React, { Component } from 'react';
import './Slate.css';

import Header from '../Header';
import BondCS from '../../components/BondCS';
import Links from '../../components/Links';

class Slate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="slate" style={{margin: '5vw', overflow: 'hidden' }}>
        <BondCS />
        <Links />
        {this.props.children}
      </div>
    );
  }
}

export default Slate;
