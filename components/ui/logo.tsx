'use client';

import React, { useState, useEffect } from 'react';

const Logo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <img 
        src={isMobile ? "/mithrandir-symbol.svg" : "/mithrandir.svg"} 
        alt="Company Logo" 
        onClick={handleClick} 
        style={{width: isMobile ? '32px' : '123px'}}
      />
    </div>
  );
};

export default Logo;
