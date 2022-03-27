import React from "react";


export const Alert = (prop) => {
    let cssClass = `alert alert-${prop.class} mt-5 `
    if (!prop.show)
        cssClass += "visually-hidden"

    return (

        <div className={cssClass} >
            {prop.msg}
        </div>
    )
}