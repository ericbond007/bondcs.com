import React from 'react';
import './SocialBlock.css';


const SocialBlock = () => (
  <div className="socialBlock">
    <a rel="noopener noreferrer" target="_blank" href="https://github.com/ericbond007">
      <i class="fab fa-github fa-5x hoverEffect" style={{ marginRight: '3rem', marginLeft: '3rem', marginBottom: '3rem'}}></i>
    </a>
    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/bondcs">
      <i class="fab fa-facebook-square fa-5x hoverEffect" style={{ margin: '3rem'}}></i>
    </a>
  </div>
);

export default SocialBlock;
