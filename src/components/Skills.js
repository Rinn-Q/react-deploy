import React from "react";
import Skill from "./Skill"
import Skill2 from "./Skill2";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
// import {M}

function Skills({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} mt-3`}>
            <p className="text-2xl font-mono">Skills</p>
            <div className="flex">
                <Skill icon={faJs} text="Javascript" color="text-yellow-400"/>
                <Skill icon={faReact} text="React" color="text-blue-400"/>
                <Skill2 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" text="C"/>
            </div>
            <div className="flex items-center">
                <Skill icon={faJs} text="Javascript" color="text-yellow-400"/>
                <Skill icon={faJs} text="Javascript" color="text-yellow-400"/>
                <Skill icon={faJs} text="Javascript" color="text-yellow-400"/>
            </div>
        </div>
    )
}

export default Skills;