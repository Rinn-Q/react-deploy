import React from "react";

function Skill2({src , text }) {
    return (
        <div className="container p-2 text-center">
            <div className="container flex items-center pl-4">
                <img src={src} className="h-16" alt=""/>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Skill2;