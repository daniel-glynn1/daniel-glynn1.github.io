import React from 'react';

import '../styles/LinkBox.css';
import GithubIcon from '../assets/github_logo.png';
import LinkedInIcon from '../assets/linkedin_logo.png';
import EmailIcon from '../assets/email_logo.png';

const LinkBox = () => {
  return (
    <div className='linkBox'>
      <a href="https://github.com/daniel-glynn1" target="_blank" rel="noreferrer">
        <img src={GithubIcon} alt="Github link" />
      </a>
      <a href="https://www.linkedin.com/in/daniel-glynn-656105206/" target="_blank" rel="noreferrer">
        <img src={LinkedInIcon} alt="LinkedIn link" />
      </a>
      <a href= "mailto: daniel.dg.glynn@gmail.com">
        <img src={EmailIcon} alt="Email link" />
      </a>
    </div>
  );
};

export default LinkBox;