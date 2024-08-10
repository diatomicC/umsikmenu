import React, { useState } from 'react';
import './MenuItem.css';

const MenuItem = ({ name, description, price, allergens }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
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
      </div>
    </div>
  );
};

export default MenuItem;
