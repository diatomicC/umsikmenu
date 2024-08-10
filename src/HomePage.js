import React from "react";
import Menu from "./component/Menu";
import Banner from "./component/Banner";
import CategorySlider from "./component/CategorySlider";
import OrderArea from "./component/OrderArea";

function HomePage() {
  return (
    <div className="HomePage" >
      <Banner />
      <CategorySlider />
      <Menu />
      <OrderArea />
    </div>
  );
}

export default HomePage;
