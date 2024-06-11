import React from "react";

function ContactSection(props) {
    return (
        <div className={`transform transition-transform duration-300 ease-in-out hover:scale-110 container p-2 text-center w-auto my-3 rounded-2xl ${props.isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className="container flex items-center justify-center">
                <img src={props.icon} className="h-8" alt=""/>
                <p>{props.value}</p>
            </div>
            
        </div>
    )
}

export default ContactSection;