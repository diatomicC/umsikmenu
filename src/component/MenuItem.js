import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/MenuItem.css";

const MenuItem = ({
  name,
  description,
  price,
  allergens,
  setSelectedItem,
  selectedItems,
  setSelectedItems,
}) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    // find if ald selected item
    var found = -1;
    selectedItems.forEach((item, index) => {
      if (item.name == name) found = index;
    });

    if (found != -1) {
      const updatedItems = [...selectedItems];
      updatedItems[found].quantity++;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([
        ...selectedItems,
        { name: name, price: price, quantity: 1 },
      ]);
    }
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    var found = -1;
    selectedItems.forEach((item, index) => {
      if (item.name == name) found = index;
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
    <button
      onClick={() => {
        setSelectedItem(name);
        navigate('/MenuDetail');
      }}
    >
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
        </div>
      </div>
    </button>
  );
};

export default MenuItem;
