import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import MenuDetail from "./MenuDetail";

function FK() {

// data use
const [selectedCategory, setSelectedCategory] = useState("");
const [selectedLanguage, setSelectedLanguage] = useState("Korean");
const [selectedItem, setSelectedItem] = useState();
const [selectedItems, setSelectedItems] = useState([]);
const [allItems, setAllItems] = useState([]);
const [allCategories, setAllCategories] = useState([]);

return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              selectedCategory={selectedCategory}
              selectedLanguage={selectedLanguage}
              selectedItems={selectedItems}
              allItems={allItems}
              allCategories={allCategories}
              setSelectedCategory={setSelectedCategory}
              setSelectedLanguage={setSelectedLanguage}
              setSelectedItem={setSelectedItem}
              setSelectedItems={setSelectedItems}
              setAllItems={setAllItems}
              setAllCategories={setAllCategories}
            />
          }
        />
        <Route path="/MenuDetail" element={<MenuDetail 
        allCategories={allCategories}
        setSelectedCategory={setSelectedCategory}
        selectedItem={selectedItem}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        selectedLanguage={selectedLanguage}/>} />
      </Routes>
    </Router>
  );
}

export default FK;