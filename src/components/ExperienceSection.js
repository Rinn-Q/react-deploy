import React from "react";

function ExperienceSection(props){
    return (
        <li className="mb-10 ms-4">
            {
                props.isPhone ? (
                    <div className={`absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border ${props.isDarkMode ? 'border-white dark:border-gray-200 dark:bg-yellow-400': 'border-white dark:border-gray-900 dark:bg-gray-800'}`}></div>
                ) : (
                    <div></div>
                )
            }
            <time className="mb-1 text-sm font-normal leading-none">{props.date}</time>
            <h3 className="text-lg font-semibold ">{props.title}</h3>
            <p className="text-base font-normal ">{props.body}</p>
        </li>
    )
}

export default ExperienceSection;