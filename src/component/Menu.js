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

const Menu = () => {
  // items to display
  const [items, setItems] = useState([]);

  // read data on load
  useEffect(() => {
    const colRef = collection(db, "StoreName", "Menu", "Korean"); //temp
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        // save feteched data to items
        setItems([...items, doc.data()]);
      });
    });
  }, []);

  // peek items
  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      <h1>추천 메뉴</h1>
      {items.length <= 0
        ? ""
        : items.map((item, index) => {
            return (
              <MenuItem
                key={index}
                name={item.menu_name}
                description={item.menu_description}
                price={item.price}
                allergens={item.allegen}
              />
            );
          })}
    </div>
  );
};

export default Menu;
