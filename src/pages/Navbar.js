import React, {useState} from "react";

function Navbar() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div style={{display: 'flex'}}>
            <img src={`${process.env.PUBLIC_URL}/img/avatar.jpg`} alt="Avatar" className="avatar"/>
                <a className="navbar-brand" href="/">Portfolio</a>
            </div>
            <ul>
                <a href="/"><li>Home</li></a>
                <a href="/"><li>About</li></a>
                <a href="/"><li>Services</li></a>
            </ul>
            <button onClick={toggleTheme} id="colorToggler" className="flex items-center">
                
                    {isDarkMode ? 
                    (
                        <div className='bg-gray-700 w-4 h-4 rounded-full ml-2' />
                    ) : (
                        <div className='bg-yellow-300 w-4 h-4 rounded-full ml-0' />
                    )}
                
            </button>
        </nav>
    )
}

export default Navbar;