import React, { Component } from 'react';
import PersonalBlock from '../../components/PersonalBlock';
import SheddBlock from '../../components/SheddBlock';
import SocialBlock from '../../components/SocialBlock';
import LMBRBlock from '../../components/LMBRBlock';
import { FadeInOut, Stagger } from 'react-animation-components';

class HomePage extends Component {
  render() {
    return (
      <div>
          <PersonalBlock />
          <SheddBlock />
        <SocialBlock />
        <LMBRBlock />
      </div>
    );
  }
  }

export default HomePage;
