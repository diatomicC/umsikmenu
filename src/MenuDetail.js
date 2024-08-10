import React from "react";
import Banner from "./component/Banner";
import CategorySlider from "./component/CategorySlider";
import ItemInfo from "./component/ItemInfo";
import OrderArea from "./component/OrderArea";

function MenuDetail({
  allItems,
  selectedItem,
  selectedItems,
  setSelectedItems,
  selectedLanguage,
}) {
  return (
    <div className="MenuDetail">
      <Banner />
      <ItemInfo
        allItems={allItems}
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
