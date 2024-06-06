import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";

function Navbar({isDarkMode, toggleTheme}) {

    return (
        <nav className={`navbar ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div style={{display: 'flex'}}>
                {/* <img src={`${process.env.PUBLIC_URL}/img/avatar.jpg`} alt="Avatar" className="avatar"/> */}
            </div>
            <ul>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Portfolio</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
            <button onClick={toggleTheme} id="colorToggler" className="flex items-center ">
                
                    {isDarkMode ? 
                    (
                        <div className='bg-gray-700 w-5 h-5 rounded-full ml-3 flex items-center' >
                            <FontAwesomeIcon icon={faMoon} size="xs" className="ml-1.5 text-white"/>
                        </div>
                    ) : (
                        <div className='bg-yellow-300 w-5 h-5 rounded-full ml-0 flex items-center'>
                            <FontAwesomeIcon icon={faSun} size="xs" className="ml-1 text-white"/>
                        </div>
                    )}
                
            </button>
        </nav>
    )
}

export default Navbar;