import React from "react";
import './buttonComponent.css'

interface IProps {
    color?: string;
    size?: string;
    name?: string;
    text?: string;
    func?: ()=>void;
    icon? :any;
}

const ButtonComponent: React.FC<IProps> = ({color, size, name, text, func, icon}) => {
 
    return (
        <button className={`buttonIcon ${color} ${size} ${name}` } onClick={func}  ><img src={icon}/><a>{text}</a> </button>
    )
}

export default ButtonComponent