import React from 'react';
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { IoIosMail as EmailIcon } from "react-icons/io";
import { IconContext } from "react-icons";



import './LinkBox.css';

const LinkBox = () => {
  return (
    <div className='linkBox'>
      <a href="https://github.com/daniel-glynn1" target="_blank" rel="noreferrer">
        <GithubIcon size={24}/>
      </a>
      <a href="https://www.linkedin.com/in/daniel-glynn-656105206/" target="_blank" rel="noreferrer">
        <LinkedInIcon size={24}/>
      </a>
      <a href= "mailto: daniel.dg.glynn@gmail.com">
        <EmailIcon size={26}/>
      </a>
    </div>
  );
};

export default LinkBox;