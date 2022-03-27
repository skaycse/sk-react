import React from "react";


export const Alert = (prop) => {
    let cssClass = `alert alert-${prop.class} mt `
    if (!prop.show)
        cssClass += "visually-hidden"

    return (

        <div className={cssClass} >
            A simple warning alert—check it out!
        </div>
    )
}