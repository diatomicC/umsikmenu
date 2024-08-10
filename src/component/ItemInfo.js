import React, { useEffect, useState } from "react";

const ItemInfo = () => {
  return (
    <>
      <div>Item Detail</div>
      <img src="" alt="item image" />
      <div>Title</div>
      <div>short description</div>
      <div>allergens list</div>
      <div>
        <p>special order</p>
        <input
          type="text"
          id="specialRequest"
          placeholder="special order input text box"
        />
      </div>
      <div>
        <p>price</p>
        <div>qualtity buttons</div>
      </div>
    </>
  );
};

export default ItemInfo;
