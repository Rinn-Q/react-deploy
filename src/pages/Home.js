import React from 'react';

function Home({isDarkMode}) {
  return (
    <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} `}>
      {/* <h1 className="text-4xl font-bold text-blue-700">Hello I am Javkhaa</h1> */}
    </div>
  );
}

export default Home;
