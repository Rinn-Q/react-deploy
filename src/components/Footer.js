import React from "react";

function Footer(props) {
    return (
        <div className={`flex items-center justify-center p-5 mt-8 ${props.isDarkMode ? 'bg-gray-700 text-white' : ' bg-gray-50 text-black'}`}>
            <p className="font-mono text-md">Made with Javkhlan &#128187;</p>
        </div>
    )
}

export default Footer;