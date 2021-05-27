import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <p>© th3DarkGhost</p>
        <a href='https://github.com/th3DarkGhost' target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </footer>
    </div>
  );
};
