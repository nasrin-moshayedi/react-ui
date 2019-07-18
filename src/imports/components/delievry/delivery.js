import React from "react";
import Card from "./../public/card";
var data = require("./../../../menu.json");

function AppDown() {
  return (
    <div className="displayflex">
      <div>Get the app:</div>
      <div className="iphones">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/69d77b8f17b59cfdbf13b6037870b080.svg"
          className="iphoneImage"
        />
        IPhone
      </div>
      <div className="iphones">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b40e273112fe1592601991dc10921970.svg"
          className="iphoneImage"
        />
        Android
      </div>
    </div>
  );
}

function Delivery(props) {
  return (
    <div className="style">
      <p className="headerCard">{props.title}</p>
      <div className="ui grid container ">
        <div className="row">
          <div className="column cardImage">
            <Card
              title={<h2>There's more to love in the app.</h2>}
              img={
                "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/816084874de4267a8e89c881db968ed2.svg"
              }
              fee="none"
              text="none"
              cards={<AppDown />}
            />
          </div>
          <div className="column cardImage">
            <Card
              title={<h2>There's more to love in the app.</h2>}
              img={
                "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/bd4c2537aa3799e345a397e7e4c9cbac.svg"
              }
              fee="none"
              text="none"
              cards={
                <a href="#" className="linkStyle">
                  Add Your Resturant
                </a>
              }
            />
          </div>
          <div className="column cardImage">
            <Card
              title={<h2>There's more to love in the app.</h2>}
              img={
                "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b96045d2e2b2989e7b09200b1c40ab73.svg"
              }
              fee="none"
              text="none"
              cards={
                <a href="#" className="linkStyle">
                  Add Your Resturant
                </a>
              }
            />
          </div>
        </div>
      </div>
      <hr className="hrStyle" />
    </div>
  );
}

export default Delivery;
