import React, { useEffect, useState } from 'react';

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  

  return (
    <div id="target-element" className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-4xl">Scroll to see me!</h1>
    </div>
  );
};

export default ScrollAnimation;
