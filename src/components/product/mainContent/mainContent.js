import React from "react";
import "./mainContent.css"

function MainContent(props) {

    return(
       
             <div className="container">
            
                {props.services && props.services.map(item=>
                    <div className="list">
                        <span className="services">{item.name}</span>
                    </div>
                )}
            
           </div>
    )
}

export default MainContent