import React from "react";
import Card from "./../public/card";
var data = require("./../../../menu.json");

for (var i = 0; i < data.length; i++) {}
function Deliverd() {
  return (
    <div className="style">
      <p className="textStyle">Food Delivery in San Francisco Bay Area</p>
      <div className="ui grid container flexContent">
        <div className="row">
          {
            (data.delivery = "True"
              ? data.map(item => (
                  <div className="column-6 cardImage">
                    <Card
                      text={item.cuisineType.title}
                      title={item.title}
                      img={item.image}
                      rate={item.rate}
                      fee={item.fee}
                      preparation={item.preparation}
                    />
                  </div>
                ))
              : data.map(item => (
                  <div className="five wide column cardImage">
                    <Card text={item.mealType.title} img={item.image} />
                  </div>
                )))
          }
        </div>
      </div>
      <hr className="hrStyle" />
    </div>
  );
}

export default Deliverd;
