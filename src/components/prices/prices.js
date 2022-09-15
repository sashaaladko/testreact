import React from "react";
import Header from "../header/header";
import { useContext } from "react";
import DataContext from "../../dataContext";
import "./prices.css";
import ListRender from "../commonComponents/listRenderTemplate";

function Prices() {
  const { showBlocks, setShowBlocks } = useContext(DataContext);
  const price =  showBlocks && showBlocks.filter((e) => e.equipment && e.equipment.length > 0);;
  return (
    <main>
      <Header />

      <div className="infoContainer">
        {price &&
          price.map((e) => (
            <>
              <div className="info">
                <ListRender solName={e.solName} equipment={e.equipment} price={price} mode="price" />
              </div>
            </>
          ))}
      </div>
    </main>
  );
}

export default Prices;
