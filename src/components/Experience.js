import React from 'react';
import ExperienceSection from './ExperienceSection';

function Experience({isDarkMode}) {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1 className='text-2xl font-mono'>Experience</h1>
      <ol className={`relative border-s ${isDarkMode ? 'border-gray-700 dark:border-gray-200' : 'border-gray-200 dark:border-gray-700'}`}>
        <ExperienceSection date={2024} role='intern' title='OnLime Network LLC' body='sadfag' isDarkMode={isDarkMode}/>
      </ol>
    </div>
  );
}

export default Experience;