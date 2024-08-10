import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ allItems, selectedCategory, selectedItems, setSelectedItems, setSelectedItem }) => {
  const [items, setItems] = useState([]);
  // show all data without filtering on load
  useEffect(() => {
    // fetch data
    setItems(allItems);
  }, [allItems]);

  // fetch data with selected category
  useEffect(() => {
    if (selectedCategory != "") {
      var tempList = [];
      allItems.forEach((item) => {
        if (item.category == selectedCategory) {
          tempList.push(item);
        }
      });
      setItems(tempList);
    } else {
      setItems(allItems);
    }
  }, [selectedCategory]);

  return (
    <div>
      {items.length <= 0
        ? "no items"
        : items.map((item, index) => {
            return (
              <MenuItem
                key={index}
                name={item.food}
                description={item.description}
                price={item.price}
                allergens={item.restrictions}
                setSelectedItem={setSelectedItem}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            );
          })}
    </div>
  );
};

export default Menu;
