import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';

import '../css/header.css';

const Header = props => {
  const { head1, head2, head3 } = props;
  return (
    <div className='header'>
      <div className='items'>
        <div className={`${head1}`}>
          <CheckCircleIcon />
        </div>
        <h5 className='heading'>Personal Details</h5>
      </div>
      <div className='items'>
        <div className={`${head2}`}>
          {head2 === 'active' || head2 === 'completed' ? <CheckCircleIcon /> : <CheckCircleTwoToneIcon />}
        </div>
        <h5 className='heading'>Company Details</h5>
      </div>
      <div className='items'>
        <div className={`${head3}`}>
          {head3 === 'active' || head3 === 'completed' ? <CheckCircleIcon /> : <CheckCircleTwoToneIcon />}
        </div>
        <h5 className='heading'>Email verification</h5>
      </div>
    </div>
  )
}
export default Header;
