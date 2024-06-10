import React from 'react';
import About from './About';
import Skills from '../components/Skills';
import Experience from '../components/Experience'

function Home({ isDarkMode }) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black m-0 w-full'} p-5`}>
      <div className='container mx-auto p-4 text-center pt-10'>
        <p className='block text-4xl font-bold'>
          I'M <span className='text-yellow-400'>Javkhlan</span>
        </p>
        <p className='mt-2 text-lg'>MUST 2-nd year student</p>
        <button className={`btn-second mt-4 px-6 py-2 rounded-full ${isDarkMode ? 'bg-yellow-400 text-gray-800' : 'bg-gray-800 text-white'}`}>
          Contact Me
        </button>
      </div>
      <About isDarkMode={isDarkMode}/>
      <Skills isDarkMode={isDarkMode}/>
      <Experience isDarkMode={isDarkMode}/>
    </div>
  );
}

export default Home;