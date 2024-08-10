import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";

import { db } from "../index";

const ItemInfo = ({
  selectedItem,
  selectedItems,
  setSelectedItems,
  selectedLanguage,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [itemData, setItemData] = useState();

  useEffect(() => {
    // fetch item data
    getDoc(doc(db, "StoreName", "Menu", selectedLanguage, selectedItem)).then(
      (snapshot) => {
        setItemData(snapshot.data());
      }
    );
  }, [selectedItem]);

  const increaseQuantity = () => {
    // find if ald selected item
    var found = -1;
    selectedItems.forEach((item, index) => {
      if (item.name == itemData.name) found = index;
    });

    if (found != -1) {
      const updatedItems = [...selectedItems];
      updatedItems[found].quantity++;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([
        ...selectedItems,
        { name: itemData.name, price: itemData.price, quantity: 1 },
      ]);
    }
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    var found = -1;
    selectedItems.forEach((item, index) => {
      if (item.name == itemData.name) found = index;
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
    <>
      <div>Item Detail</div>
      <img src="" alt="item image" />
      <div>{itemData?.name}</div>
      <div>{itemData?.menu_description}</div>
      <div>{itemData?.allegen}</div>
      <div>
        <p>special order</p>
        <input
          type="text"
          id="specialRequest"
          placeholder="special order input text box"
        />
      </div>
      <div>
        <p>{itemData?.price}</p>
        <div className="menu-item-quantity">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </>
  );
};

export default ItemInfo;
