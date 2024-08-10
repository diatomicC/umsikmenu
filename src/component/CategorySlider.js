import React, { useEffect, useState } from "react";
import { CategoryCapsule } from "./CategoryCapsule";

import "../css/CategorySlider.css";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  // fetech category from data
  useEffect(() => {
    // todo
    setCategories(["category 1", "category 2", "category 3"]);
  }, []);

  const selectCategory = (selected) => {
    // clear selection
    const allCat = document.querySelectorAll(".Selected");
    var clearCategory = false;
    allCat.forEach((cat) => {
      if (cat.innerText === selected) {
        clearCategory = true;
      }
      cat.classList.remove("Selected");
    });

    // enable the selected category
    if (!clearCategory) {
      const allCapsule = document.querySelectorAll(".CategoryCapsule");
      for (let i = 0; i < allCapsule.length; i++) {
        if (allCapsule[i].innerText === selected) {
          allCapsule[i].classList.add("Selected");
          break;
        }
      }
    }

    // todo
    // filter selected items
  };

  return (
    <div className="CategorySlider">
      {categories.map((cat, index) => {
        return (
          <CategoryCapsule
            key={index}
            catText={cat}
            selectCategory={selectCategory}
          />
        );
      })}
    </div>
  );
};

export default CategorySlider;
