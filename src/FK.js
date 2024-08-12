import React, { useDebugValue, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as XLSX from "xlsx";

import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import MenuDetail from "./MenuDetail";
import ConfirmOrder from "./ConfirmOrder";

import "./css/style.css";
export const supportedLanguages = [
  "Korean",
  "Japanese",
  "English",
  "Cantonese",
  "Chinese",
];

function FK() {
  // data use
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const [selectedItem, setSelectedItem] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRestrictions, setSelectedRestrictions] = useState();
  const [orderItems, setOrderItems] = useState([]);

  const [allItems, setAllItems] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allRestrictions, setAllRestrictions] = useState([]);

  // change language base on device language
  useEffect(() => {
    switch (navigator.language) {
      case "ko-KR":
        setSelectedLanguage(0);
        break;
      case "ja_JP":
        setSelectedLanguage(1);
        break;
      case "en-US":
        setSelectedLanguage(2);
        break;
      case "zh-Hans-HK":
        setSelectedLanguage(3);
        break;
      case "zh-Hans-CN":
        setSelectedLanguage(4);
        break;
      default:
        setSelectedLanguage(2);
        break;
    }
  }, []);

  // get all data from one csv on load
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/sample1.xlsx").then((response) => {
      response.arrayBuffer().then((arrayBuffer) => {
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });

        workbook.SheetNames.forEach((sheetName) => {
          if (sheetName == supportedLanguages[selectedLanguage]) {
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
  }, [selectedLanguage]);

  // show items with no restrictions on top
  useEffect(() => {
    var goodList = [];
    var badList = [];
    allItems.forEach((item) => {
      var added = false;
      
      console.log(item);
      selectedRestrictions.forEach((restriction) => {
        for (let i = 0; i < item.restrictions.length; i++)
        if (item.restrictions[i] == restriction) {
          if (!added) badList.push(item);
          added = true;
        }
      });
      if (!added) goodList.push(item);
    });
    setAllItems(goodList.concat(badList));
  }, [selectedRestrictions]);

  useEffect(() => {
    setSelectedRestrictions([]);
  }, []);
  // save selected restrictions
  useEffect(() => {
    localStorage.setItem(
      "selectedRestrictions",
      JSON.stringify(selectedRestrictions)
    );
  }, [selectedRestrictions]);

  // toggle language use
  const ToggleLanguage = () => {
    setSelectedLanguage((selectedLanguage + 1) % supportedLanguages.length);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/umsikmenu"
          element={
            <LandingPage
              allRestrictions={allRestrictions}
              selectedRestrictions={selectedRestrictions}
              setSelectedRestrictions={setSelectedRestrictions}
              ToggleLanguage={ToggleLanguage}
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
              ToggleLanguage={ToggleLanguage}
              setSelectedItem={setSelectedItem}
              setSelectedItems={setSelectedItems}
              setAllItems={setAllItems}
              setAllCategories={setAllCategories}
              selectedRestrictions={selectedRestrictions}
            />
          }
        />
        <Route
          path="/ConfirmOrder"
          element={
            <ConfirmOrder
              allItems={allItems}
              selectedItem={selectedItem}
              ToggleLanguage={ToggleLanguage}
              setSelectedItem={setSelectedItem}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
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
              ToggleLanguage={ToggleLanguage}
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
