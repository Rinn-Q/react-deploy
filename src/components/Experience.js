import React , {useState , useEffect} from 'react';
import ExperienceSection from './ExperienceSection';

function Experience({isDarkMode}) {
  const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const target = document.getElementById('target-element');
    
          if (target) {
            const rect = target.getBoundingClientRect();
            const isElementVisible = rect.top <= 250;
            // console.log(rect.top + " --- " + window.innerHeight + " --- " + rect.bottom)
    
            if (isElementVisible) {
              setIsVisible(true);
            }
          }
        };
        handleScroll();
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition-opacity duration-1000 ${isVisible ? 'fadeInRight' : 'opacity-0'}`}>
      <h1 className='text-2xl font-mono'>Experience</h1>
      <ol className={`relative border-s ${isDarkMode ? 'border-gray-700 dark:border-gray-200' : 'border-gray-200 dark:border-gray-700'}`}>
        <ExperienceSection date={2023} role='tester' title='Erxes Mongolia LLC' body="did a testing in Erxes"  isDarkMode={isDarkMode}/>
        <ExperienceSection date={2024} role='intern' title='OnLime Network LLC' body='still on intern' isDarkMode={isDarkMode}/>
      </ol>
    </div>
  );
}

export default Experience;