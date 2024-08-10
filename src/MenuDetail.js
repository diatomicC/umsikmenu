import React from "react";
import Banner from "./component/Banner";
import CategorySlider from "./component/CategorySlider";
import ItemInfo from "./component/ItemInfo";
import OrderArea from "./component/OrderArea";

function MenuDetail({
  allCategories,
  setSelectedCategory,
  selectedItem,
  selectedItems,
  setSelectedItems,
  selectedLanguage
}) {
  return (
    <div className="MenuDetail">
      <Banner />
      <CategorySlider
        allCategories={allCategories}
        setSelectedCategory={setSelectedCategory}
      />
      <ItemInfo
        selectedItem={selectedItem}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        selectedLanguage={selectedLanguage}
      />
      <OrderArea selectedItems={selectedItems} />
    </div>
  );
}

export default MenuDetail;
