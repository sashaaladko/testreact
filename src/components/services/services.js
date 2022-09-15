import React from "react";
import Header from "../header/header";
import { useContext } from "react";
import DataContext from "../../dataContext";
import "./services.css";
import ListRender from "../commonComponents/listRenderTemplate";

function Services() {
  const { showBlocks, setShowBlocks } = useContext(DataContext);
  const serv = showBlocks && showBlocks.filter((e) => e.equipment && e.equipment.length > 0);

  return (
    <main>
      <Header />
      <div className="infoContainer">
        {serv &&
          serv.map((e) => (
            <>
              <div className="info">
                <ListRender
                  solName={e.solName}
                  equipment={e.equipment}
                  mode="services"
                />
              </div>
            </>
          ))}
      </div>
    </main>
  );
}

export default Services;
