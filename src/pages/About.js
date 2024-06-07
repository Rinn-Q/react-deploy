import React from 'react';
import Skills from '../components/Skills';

function About({isDarkMode}) {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} container p-5`}>
      <h1 className='text-2xl font-mono'>About</h1>
      <p className='text-l font-mono'>My name is Javhlan. 2nd year student of Software Engineering, School of Information and
        Communication Technology, Mongolian University of Science and Technology. Currently working as an intern at onLime network LLC.</p>
      <Skills isDarkMode={isDarkMode}/>
    </div>
  );
}

export default About;