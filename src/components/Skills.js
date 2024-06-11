import React from "react";
import Skill2 from "./Skill2";

function Skills({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} mt-3 w-full`}>
            <p className="text-2xl font-mono w-full">Skills</p>
            <div className="flex justify-around w-full items-center ">
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" text="C"/>
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" text="Java"/>
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" text="HTML"/>
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" text="CSS"/>
            </div>
            <div className="flex items-center justify-around">
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" text="Node"/>
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" text="Express"/>
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" text="MySQL"/>
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" text="MongoDB"/>
            </div>
            <div className="flex items-center justify-around">
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" text="Postgre"/>
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" text="Next"/>
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" text="React"/>
                <Skill2 isDarkMode={isDarkMode} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" text="MUI"/>
            </div>
            <div className="flex items-center">
                
            </div>
        </div>
    )
}

export default Skills;