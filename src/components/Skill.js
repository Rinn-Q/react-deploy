import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skill({icon , text , color}) {
    return (
        <div className="container p-2 text-center">
            <FontAwesomeIcon icon={icon} size="4x" className={`${color}`} />
            <p>{text}</p>
        </div>
    )
}

export default Skill;