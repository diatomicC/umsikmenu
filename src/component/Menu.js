import React from 'react';
import MenuItem from './Menuitem';

const menuData = [
  {
    name: "다슬기 짜장면",
    description: "작은 민물 달팽이가 들어간 짜장면입니다.",
    price: 11000,
    allergens: ["연체동물", "밀", "대두"],
  },
  {
    name: "다슬기 짬뽕",
    description: "매콤한 짬뽕 국물에 다슬기를 듬뿍...",
    price: 13000,
    allergens: ["조개류", "해산물", "갑각류", "글루텐"],
  },
  {
    name: "다슬기 쟁반짜장 (2인)",
    description: "쫄깃한 면발에 다슬기와 각종 채소를 ...",
    price: 24000,
    allergens: ["조개류", "해산물", "갑각류", "글루텐"],
  },
  {
    name: "다슬기 쟁반짜장 (3인)",
    description: "쫄깃한 면발에 다슬기와 각종 채소를 ...",
    price: 34000,
    allergens: ["조개류", "해산물", "갑각류", "글루텐"],
  }
];

const Menu = () => {
  return (
    <div>
      <h1>추천 메뉴</h1>
      {menuData.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
          allergens={item.allergens}
        />
      ))}
    </div>
  );
};

export default Menu;
