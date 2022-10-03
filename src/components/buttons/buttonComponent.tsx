import React from "react";
import './buttonComponent.css'

interface Props {
    color?: string;
    size?: string;
    name?: string;
    text?: string;
    func?: ()=>void;
    icon? :any;
}

const ButtonComponent: React.FC<Props> = ({color, size, name, text, func, icon}) => {
 
    return (
        <button className={`buttonIcon ${color} ${size} ${name}` } onClick={func} ><img src={icon}/>{text}</button>
    )
}

export default ButtonComponent