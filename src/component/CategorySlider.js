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

  return (
    <div className="CategorySlider">
      {categories.map((cat, index) => {
        return <CategoryCapsule key={index} content={cat} />;
      })}
    </div>
  );
};

export default CategorySlider;
