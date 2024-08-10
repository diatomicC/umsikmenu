import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/OrderArea.css";

const OrderArea = ({ selectedItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // calculate total price
  useEffect(() => {
    var total = 0;
    selectedItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [selectedItems]);

  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        position: "fixed",
        bottom: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        className="BigConfirmButton"
        onClick={() => {
          if (selectedItems.length > 0) navigate("/ConfirmOrder");
            else alert("Please select at least one item");
        }}
      >
        Order ₩ {totalPrice} Won{" "}
      </button>
    </div>
  );
};

export default OrderArea;
