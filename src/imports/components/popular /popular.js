import React from "react";
var data = require("./../../../menu.json");

function Nearest() {
  return (
    <div style={{ margin: "0 80px" }}>
      <div className="textStyle">Explore Popular Categories</div>
      <div style={{ display: "flex", overflow: "hidden" }}>
        {data.map(item => (
          <div>
            <img src={item.image} className="avatar" />
            <p style={{ textAlign: "center" }}>{item.menuType.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nearest;
