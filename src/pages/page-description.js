import React from 'react';

import '../css/description.css'

const PageDescription = props => {
  let { heading, description } = props
  return (
    <div className='description'>
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PageDescription;