import React, { useEffect, useState } from "react";

const OrderArea = ({ selectedItem }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    // todo
    var total = 0;
    selectedItem.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [selectedItem]);
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        backgroundColor: "#0008",
        position: "fixed",
        bottom: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          height: "50px",
          width: "300px",
          backgroundColor: "#D43544",
          color: "#eee",
          border: "none",
          borderRadius: "10px",
        }}
      >
        {" "}
        Order {totalPrice} Won{" "}
      </button>
    </div>
  );
};

export default OrderArea;
