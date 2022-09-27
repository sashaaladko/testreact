import React from "react";
import Header from "../header/header";
import "./product.css";

function ProductRender(data) {
  return (
    <main>
      <>
        <div className="wrapper">
          <div className="info">
            <button className="btn"  onClick={data.prodCart}>+</button>
            <label className="version">Version 2.4.0</label>
            <div className="name">
              <h2>{data.solName}</h2>
            </div>
            <div className="container">
              {data.services &&
                data.services.map((item) => (
                  <div className="list">
                    <span className="services">{item.name}</span>
                    <span className="price">{item.price}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    </main>
  );
}

export default ProductRender;
