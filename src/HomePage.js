import React, { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import Menu from "./component/Menu";
import Banner from "./component/Banner";
import CategorySlider from "./component/CategorySlider";
import OrderArea from "./component/OrderArea";

import { db } from "./index";

function HomePage({
  selectedCategory,
  selectedLanguage,
  selectedItem,
  allItems,
  allCategories,
  setSelectedCategory,
  setSelectedLanguage,
  setSelectedItem,
  setAllItems,
  setAllCategories,
}) {

  // read data on load, only run once
  useEffect(() => {
    const colRef = collection(db, "StoreName", "Menu", selectedLanguage); //temp
    getDocs(colRef).then((snapshot) => {
      var tmepCatList = [];
      snapshot.docs.forEach((doc) => {
        // save feteched data to items
        setAllItems([...allItems, doc.data()]);
        if (!tmepCatList.includes(doc.data().category)) {
          tmepCatList.push(doc.data().category);
        }
        setAllCategories(tmepCatList);
      });
    });
  }, []);

  return (
    <div className="HomePage">
      <Banner />
      <CategorySlider
        allCategories={allCategories}
        setSelectedCategory={setSelectedCategory}
      />
      <p>{selectedCategory}</p>
      <Menu
        allItems={allItems}
        selectedCategory={selectedCategory}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <OrderArea selectedItem={selectedItem} />
    </div>
  );
}

export default HomePage;
