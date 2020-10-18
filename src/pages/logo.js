import React from 'react';
import logo from '../../src/Logo.png';

import '../css/company-details.css';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} className='logo' alt='logo' />
      <p>Upload your company logo</p>
    </div>
  );
}
export default Logo;
