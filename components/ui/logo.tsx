'use client';

import React from 'react';

const Logo = () => {

  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <img src={window.innerWidth <= 768 ? "/mithrandir-symbol.svg" : "/mithrandir.svg"} alt="Company Logo" onClick={handleClick} style={{width: window.innerWidth <= 768 ? '32px' : '123px'}}/>
    </div>
  );
};

export default Logo;
