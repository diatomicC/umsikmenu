import React from "react";
import Banner from "./component/Banner";
import CategorySlider from "./component/CategorySlider";
import ItemInfo from "./component/ItemInfo";
import OrderArea from "./component/OrderArea";

function MenuDetail({allCategories, setSelectedCategory, selectedItem}) {
  return (
    <div className="MenuDetail">
      <Banner />
      <CategorySlider
        allCategories={allCategories}
        setSelectedCategory={setSelectedCategory}
      />
      <ItemInfo />
      <OrderArea selectedItem={selectedItem}/>
    </div>
  );
}

export default MenuDetail;
