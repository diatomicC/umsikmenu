import React, { useEffect, useState } from "react";
import "./MenuItem.css";

const MenuItem = ({
  name,
  description,
  price,
  allergens,
  selectedItem,
  setSelectedItem,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    // find if ald selected item
    var found = -1;
    selectedItem.forEach((item, index) => {
      if (item.name == name) found = index;
    });

    if (found != -1) {
      const updatedItems = [...selectedItem];
      updatedItems[found].quantity++;
      setSelectedItem(updatedItems);
    } else {
      setSelectedItem([
        ...selectedItem,
        { name: name, price: price, quantity: 1 },
      ]);
    }
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    var found = -1;
    selectedItem.forEach((item, index) => {
      if (item.name == name) found = index;
    });

    // if selected amount > 0, quantity - 1
    const updatedItems = [...selectedItem];
    if (updatedItems[found].quantity - 1 > 0) {
      const updatedItems = [...selectedItem];
      updatedItems[found].quantity--;
      setSelectedItem(updatedItems);
    }
    // remove item if selected amount <= 0
    else {
      setSelectedItem([
        ...selectedItem.slice(0, found),
        ...selectedItem.slice(found + 1),
      ]);
    }

    setQuantity(quantity - 1);
  };

  const sumbitOrder = () => {
    // todo
    // pass order quality and item to order list
    console.log("Order submitted: ", quantity);
    // go back to home page
  };

  return (
    <div className="menu-item">
      <div className="menu-item-details">
        <h2 className="menu-item-name">{name}</h2>
        <p className="menu-item-description">{description}</p>
        <div className="menu-item-allergens">
          {allergens.map((allergen, index) => (
            <span key={index} className="allergen">
              #{allergen}
            </span>
          ))}
        </div>
        <p className="menu-item-price">{price}원</p>
      </div>
      <div className="menu-item-quantity">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
        {/* <button onClick={sumbitOrder}>Order</button> */}
      </div>
    </div>
  );
};

export default MenuItem;
