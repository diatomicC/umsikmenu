import React, { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import Menu from "./component/Menu";
import Banner from "./component/Banner";
import CategorySlider from "./component/CategorySlider";
import OrderArea from "./component/OrderArea";

import { db } from "./index";
import { supportedLanguages } from "./FK";
import "./css/HomePage.css";

function HomePage({
  selectedCategory,
  selectedLanguage,
  selectedItems: selectedItems,
  allItems,
  allCategories,
  setSelectedCategory,
  ToggleLanguage,
  setSelectedItem,
  setSelectedItems,
  setAllItems,
  setAllCategories,
  selectedRestrictions,
}) {
  // read data on load, only run once
  useEffect(() => {
    const colRef = collection(db, "StoreName", "Menu", supportedLanguages[selectedLanguage]); //temp
    getDocs(colRef).then((snapshot) => {
      var tmepCatList = [];
      snapshot.docs.forEach((doc) => {
        // save feteched data to items
        setAllItems([...allItems, doc]);
        if (!tmepCatList.includes(doc.data().category)) {
          tmepCatList.push(doc.data().category);
        }
        setAllCategories(tmepCatList);
      });
    });
  }, []);

  return (
    <div className="HomePage">
      <Banner ToggleLanguage={ToggleLanguage}/>
      <CategorySlider
        allCategories={allCategories}
        setSelectedCategory={setSelectedCategory}
      />
      <p className="SelectedCategory">{selectedCategory}</p>
      <Menu
        allItems={allItems}
        selectedCategory={selectedCategory}
        setSelectedItem={setSelectedItem}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        selectedRestrictions={selectedRestrictions}
      />
      <OrderArea selectedItems={selectedItems} />
    </div>
  );
}

export default HomePage;
