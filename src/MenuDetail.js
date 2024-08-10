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
  selectedRestrictions,
  ToggleLanguage,
}) {
  return (
    <div className="MenuDetail">
      <Banner ToggleLanguage={ToggleLanguage}/>
      <ItemInfo
        allItems={allItems}
        selectedItem={selectedItem}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        selectedLanguage={selectedLanguage}
        selectedRestrictions={selectedRestrictions}
      />
      <OrderArea selectedItems={selectedItems} />
    </div>
  );
}

export default MenuDetail;
