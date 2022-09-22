import React from "react";

function listType(data) {
  return (
    <>
      {data.mode == "product" && <span className="lbl">Услуги</span>}

      <div className="name">
        <h2>{data.solName}</h2>
      </div>
      <div className="container">
        {data.services &&
          data.mode == "product" &&
          data.services.map((item) => (
            <div className="list">
              <span className="services">{item.name}</span>
              <span className="price">{item.price}</span>
            </div>
          ))}
        {data.mode != "product" && (
            
          <>
            <span className="lbl">Устройства</span>
            <div className="container">
              {data.equipment &&
                data.equipment.map((eq) => (
                  <div className="list">
                    <span className="services">{eq.name}</span>
                    {data.mode == "price" && <span className="price">{eq.price}</span>}
                  </div>
                ))}
            </div>
          </>
        )}

      </div>
    </>
  );
}

const ListRender = (data) => {
  return <>{listType(data)}</>;
};

export default ListRender;
