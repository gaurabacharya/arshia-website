import React from 'react';
import './hearts.css';

const HeartsBackground = () => {
  const childCount = 50; 
  const children = Array.from({ length: childCount }).map((_, index) => (
    // Each child gets a <span> as expected by your CSS.
    <div key={index}>
      <span></span>
    </div>
  ));

  return <div id="background">{children}</div>;
};

export default HeartsBackground;
