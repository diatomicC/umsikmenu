import React, { useState, useEffect } from "react";
import Banner from "./component/Banner";
import Menu from "./component/Menu";

import "./css/ConfirmOrder.css";

const ConfirmOrder = ({
  allItems,
  setSelectedItem,
  selectedItems,
  setSelectedItems,
  selectedRestrictions,
  ToggleLanguage,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemToPass, setItemToPass] = useState([]);

  useEffect(() => {
    // calculate total price
    var total = 0;
    selectedItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);

    // set item to pass
    var tempList = [];
    selectedItems.forEach((item) => {
      allItems.forEach((allItem) => {
        if (item.name === allItem.food) {
          tempList.push(allItem);
        }
      });
    });
    setItemToPass(tempList);
  }, [selectedItems]);

  return (
    <div className="ConfirmOrder">
      <Banner ToggleLanguage={ToggleLanguage} />
      <Menu
        allItems={itemToPass}
        selectedCategory={""}
        setSelectedItem={setSelectedItem}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        selectedRestrictions={selectedRestrictions}
      />
      <p>Total: ₩ {totalPrice}</p>
      <p style={{ color: "red" }}>
        ⚠️ Restricted foods are present. ⚠️
        <br />
        Would you like to proceed with your order?
      </p>
      <button className="BigConfirmButton">Confirm Order</button>
    </div>
  );
};

export default ConfirmOrder;
