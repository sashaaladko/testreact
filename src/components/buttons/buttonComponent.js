import React from "react";
import './buttonComponent.css'

function ButtonComponent(props) {
 
    return (
        <button className={`buttonIcon ${props.color} ${props.size} ${props.name}` } onClick={props.func} ><img src={props.icon}/>{props.text}</button>
    )
}

export default ButtonComponent