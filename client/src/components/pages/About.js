import React from 'react';
import PropTypes from 'prop-types';


const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>
        This is a React app for keeping contacts!
      </p>
      <p className='bg-dark p'>
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  )
}

export default About;
