import React from "react";

function Skill2(props) {
    return (
        <div className={`transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer p-2 text-center w-1/5 my-3 rounded-2xl ${props.isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className="container flex items-center justify-center">
                <img src={props.src} className="h-16" alt=""/>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default Skill2;