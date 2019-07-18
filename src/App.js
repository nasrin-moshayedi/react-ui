import React from "react";
import "./style/App.css";
import Menu from "./imports/components/menu/menu";
import MainImage from "./imports/components/main_image/MainImage";
import Deliverd from "./imports/components/delivered/delivered";
import New from "./imports/components/new/new";
import Delivery from "./imports/components/delievry/delivery";
import Nearest from "./imports/components/nearestCity/nearestCity";
import Popular from "./imports/components/popular/popular";
import Footer from "./imports/components/footer/footer";

function App() {
  return (
    <div>
      <Menu />
      <MainImage />
      <Deliverd />
      <Delivery />
      <New title="New on Uber Eats" />
      <New title="Pizza Delivery in San Francisco Bay Area" />
      <Nearest />
      <New title="Chinese Delivery in San Francisco Bay Area" />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;
