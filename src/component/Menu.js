import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { getDocs, collection, doc } from "firebase/firestore";

import { db } from "../index";

// const menuData = [
//   {
//     menu_name: "다슬기 짜장면",
//     menu_description: "작은 민물 달팽이가 들어간 짜장면입니다.",
//     price: 11000,
//     allegen: ["연체동물", "밀", "대두"],
//   },
//   {
//     menu_name: "다슬기 짬뽕",
//     menu_description: "매콤한 짬뽕 국물에 다슬기를 듬뿍...",
//     price: 13000,
//     allegen: ["조개류", "해산물", "갑각류", "글루텐"],
//   },
//   {
//     menu_name: "다슬기 쟁반짜장 (2인)",
//     menu_description: "쫄깃한 면발에 다슬기와 각종 채소를 ...",
//     price: 24000,
//     allegen: ["조개류", "해산물", "갑각류", "글루텐"],
//   },
//   {
//     menu_name: "다슬기 쟁반짜장 (3인)",
//     menu_description: "쫄깃한 면발에 다슬기와 각종 채소를 ...",
//     price: 34000,
//     allegen: ["조개류", "해산물", "갑각류", "글루텐"],
//   },
// ];

const Menu = ({ allItems, selectedCategory, selectedItem, setSelectedItem }) => {
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
                name={item.menu_name}
                description={item.menu_description}
                price={item.price}
                allergens={item.allegen}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            );
          })}
    </div>
  );
};

export default Menu;
