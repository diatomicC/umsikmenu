import React, { useDebugValue, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as XLSX from "xlsx";

import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import MenuDetail from "./MenuDetail";

function FK() {
  // data use
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedItem, setSelectedItem] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRestrictions, setSelectedRestrictions] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allRestrictions, setAllRestrictions] = useState([]);

  // get all data from one csv on load
  useEffect(() => {
    fetch("/sample1.xlsx").then((response) => {
      response.arrayBuffer().then((arrayBuffer) => {
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });

        workbook.SheetNames.forEach((sheetName) => {
          if (sheetName == selectedLanguage) {
            const worksheet = workbook.Sheets[sheetName];
            const sheetData = XLSX.utils.sheet_to_json(worksheet, {
              header: 1,
            });

            var tempDataList = [];
            var tempCatList = [];
            var tempResList = [];
            for (let i = 1; i < sheetData.length; i++) {
              tempDataList.push({
                category: sheetData[i][0],
                food: sheetData[i][1],
                description: sheetData[i][2],
                price: sheetData[i][3],
                restrictions: sheetData[i][4].split(", "),
                ingredient: sheetData[i][5].split(", "),
              });
              if (!tempCatList.includes(sheetData[i][0])) {
                tempCatList.push(sheetData[i][0]);
              }
              for (let j = 0; j < sheetData[i][4].split(", ").length; j++) {
                if (!tempResList.includes(sheetData[i][4].split(", ")[j])) {
                  tempResList.push(sheetData[i][4].split(", ")[j]);
                }
              }
            }
            setAllItems(tempDataList);
            setAllCategories(tempCatList);
            setAllRestrictions(tempResList);
          } else return;
        });
      });
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingPage
              allRestrictions={allRestrictions}
              selectedRestrictions={selectedRestrictions}
              setSelectedRestrictions={setSelectedRestrictions}
            />
          }
        />
        <Route
          path="/Home"
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
              selectedRestrictions={selectedRestrictions}
            />
          }
        />
        <Route
          path="/MenuDetail"
          element={
            <MenuDetail
              allItems={allItems}
              allCategories={allCategories}
              setSelectedCategory={setSelectedCategory}
              selectedItem={selectedItem}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              selectedLanguage={selectedLanguage}
              selectedRestrictions={selectedRestrictions}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default FK;
