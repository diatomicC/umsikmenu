import React, { useEffect, useState } from "react";

import "../css/ItemInfo.css";

const ItemInfo = ({
  allItems,
  selectedItem,
  selectedItems,
  setSelectedItems,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [itemData, setItemData] = useState();

  useEffect(() => {
    // fetch item data
    allItems.forEach((item) => {
      if (item.food == selectedItem) {
        setItemData(item);
      }
    });
  }, [selectedItem]);

  const increaseQuantity = () => {
    // find if ald selected item
    var found = -1;
    selectedItems.forEach((item, index) => {
      if (item.food == itemData.food) found = index;
    });

    if (found != -1) {
      const updatedItems = [...selectedItems];
      updatedItems[found].quantity++;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([
        ...selectedItems,
        { food: itemData.food, price: itemData.price, quantity: 1 },
      ]);
    }
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity == 0) return;

    var found = -1;
    selectedItems.forEach((item, index) => {
      if (item.food == itemData.food) found = index;
    });

    // if selected amount > 0, quantity - 1
    const updatedItems = [...selectedItems];
    if (updatedItems[found].quantity - 1 > 0) {
      const updatedItems = [...selectedItems];
      updatedItems[found].quantity--;
      setSelectedItems(updatedItems);
    }
    // remove item if selected amount <= 0
    else {
      setSelectedItems([
        ...selectedItems.slice(0, found),
        ...selectedItems.slice(found + 1),
      ]);
    }

    setQuantity(quantity - 1);
  };

  return (
    <div className="ItemInfo">
      <img className="foodImg" src="" alt="item image" />
      <div className="name">{itemData?.food}</div>
      <div className="description">{itemData?.description}</div>
      <div className="restrictions">
        {itemData?.restrictions.map((e) => " #" + e)}
      </div>
      <div className="specialRequest">
        <div>Special order:</div>
        <input
          type="text"
          id="specialRequest"
          placeholder="special order input text box"
        />
      </div>
      <div className="orderArea">
        <p className="price">{itemData?.price}</p>
        <div classfood="quantityBtn">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
