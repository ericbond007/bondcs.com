import React, { Component } from 'react';
import './Slate.css';

import Header from '../Header';
import BondCS from '../../components/BondCS';
import Links from '../../components/Links';
import PersonalBlock from '../../components/PersonalBlock';
import SheddBlock from '../../components/SheddBlock';
import SocialBlock from '../../components/SocialBlock';
import LMBRBlock from '../../components/LMBRBlock';
import { FadeInOut, Stagger } from 'react-animation-components';


class Slate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="slate"> 
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child is-12">
      <BondCS />
    </article>
  </div>
</div>

<div className="tile is-ancestor">
  <div className="tile is-vertical is-12">
    <div className="tile">
      <div className="tile is-parent">
        <article className="tile is-child is-2">
          <div className="content">
          </div>
        </article>
      </div>
      <div className="tile is-8 is-vertical">
        <div className="tile">

          <div className="tile is-parent">
            <article className="tile is-child">
              <PersonalBlock />
            </article>
          </div>

          <div className="tile is-parent">
            <article className="tile is-child">
              <LMBRBlock />
            </article>
          </div>
        </div>
        <div className="tile">

        <div className="tile is-parent">
          <article className="tile is-child">
            <SocialBlock />
          </article>
        </div>

        <div className="tile is-parent">
          <article className="tile is-child">
            <SheddBlock />
          </article>
        </div>
      </div>

      </div>
      <div className="tile is-child is-2">
      </div>
    </div>

  </div>
</div>

      </div>
    );
  }
}

export default Slate;
