import React from 'react';
import Skills from '../components/Skills';

function About({isDarkMode}) {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} container p-5`}>
      <h1 className='text-2xl font-mono'>About</h1>
      <p className='text-xl font-mono'>some text here ...</p>
      <Skills isDarkMode={isDarkMode}/>
    </div>
  );
}

export default About;