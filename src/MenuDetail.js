import React from "react";
import Banner from "./component/Banner";
import CategorySlider from "./component/CategorySlider";
import ItemInfo from "./component/ItemInfo";
import OrderArea from "./component/OrderArea";

function MenuDetail() {
  return (
    <div className="MenuDetail" >
      <Banner />
      <CategorySlider />
      <ItemInfo />
      <OrderArea /> 
    </div>
  );
}

export default MenuDetail;
