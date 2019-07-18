import React from "react";
import Card from "./../public/card";
var data = require("./../../../menu.json");

for (var i = 0; i < data.length; i++) {}
function New(props) {
  return (
    <div className="style">
      <p
        style={{
          marginBottom: 24,
          lineHeight: "32px",
          fontSize: 26,
          fontFamily: "UberMoveText-Medium"
        }}
      >
        {props.title}
      </p>
      <div className="ui grid container flexContent">
        <div className="row">
          {data.map(item => (
            <div className="column-6 cardImage">
              <Card
                text={item.cuisineType.title}
                title={item.title}
                img={item.image}
                rate={item.rate}
                fee={item.fee}
                preparation={item.preparation}
                image="image"
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="hrStyle" />
    </div>
  );
}

export default New;
