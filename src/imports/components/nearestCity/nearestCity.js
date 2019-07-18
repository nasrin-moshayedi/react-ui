import React from "react";
// import Card from "./../public/card";
// var data = require("./../../../menu.json");
var city = [
  "Austin",
  "Austin",
  " Baltimore - Maryland",
  "Boston",
  "Charlotte",
  "Chicago",
  "Dallas - Fort Worth",
  "Austin",
  "Baltimore-Maryland",
  "Boston",
  "Charlotte",
  "Chicago",
  "Denver",
  "Las Vegas",
  "Los Angeles",
  "Miami",
  "Minneapolis - St. Paul",
  "New York City",
  "Orange County",
  "Palm Springs",
  "Philadelphia",
  "Phoenix",
  "Portland",
  "Sacramento",
  "San Diego",
  "San Francisco Bay Area",
  "Seattle",
  "Tampa Bay"
];

function Nearest() {
  return (
    <div style={{ margin: "0 80px" }}>
      <div className="displayflex" style={{ justifyContent: "space-between" }}>
        <div style={{ fontSize: 26 }}>Cities Near You</div>
        <div className="linkStyle">View all 500+ cities</div>
      </div>
      <div className="gridCity">
        {city.map(item => (
          <p>{item}</p>
        ))}
      </div>

      <hr className="hrStyle" />
    </div>
  );
}

export default Nearest;
