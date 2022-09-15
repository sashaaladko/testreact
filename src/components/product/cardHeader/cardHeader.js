import React from "react";
import "./cardHeader.css"

function CardHeader(props) {
    return(
      <>
      <div className="name">
            <label className="version">Version 2.4.0</label>
            <h2>{props.solName}</h2>
        </div>
        <label className="lbl">Услуги</label>
      </>
        
    )
}

export default CardHeader