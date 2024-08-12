import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./css/LandingPage.css";

function LandingPage({
  allRestrictions,
  selectedRestrictions,
  setSelectedRestrictions,
  ToggleLanguage,
}) {
  const navigate = useNavigate();
  const [randomTableNumber, setRandomTableNumber] = useState(0);

  useEffect(() => {
    setRandomTableNumber(Math.floor(Math.random() * 100 + 1));
  }, []);

  useEffect(() => {
    const checkboxes = document.querySelectorAll(".RestrictionCheckbox");
    checkboxes.forEach((checkbox) => {
      if (selectedRestrictions.includes(checkbox.value)) {
        checkbox.checked = true;
      }
    });
  }, [selectedRestrictions, ]);

  // handle checkbox for later usage
  const handleCheckboxChange = (event) => {
    const { target } = event;
    const { value } = target;

    if (target.checked) {
      setSelectedRestrictions([...selectedRestrictions, value]);
    } else {
      setSelectedRestrictions(
        selectedRestrictions.filter((item) => item !== value)
      );
    }
  };

  return (
    <div className="LandingPage">
      <button
        style={{ position: "absolute", right: "10px", top: "40px" }}
        onClick={() => {
          ToggleLanguage();
        }}
      >
        <img src={process.env.PUBLIC_URL + "/language.png"} width={24} height={24} />
      </button>
      <p className="Title">
        Samson
        <br />
        Suta Jajang
      </p>
      <p className="Caution">⚠️ Select all food restrictions ⚠️</p>
      <div className="RestrictionsList">
        {allRestrictions.length <= 0
          ? ""
          : allRestrictions.map((restriction, index) => {
              return (
                <div
                  className="Restriction"
                  key={index}
                  style={{ width: "100%", position: "relative" }}
                >
                  <label htmlFor={restriction}>{restriction}</label>
                  <input
                    className="RestrictionCheckbox"
                    type="checkbox"
                    id={restriction}
                    name={restriction}
                    value={restriction}
                    onChange={handleCheckboxChange}
                    style={{ position: "absolute", right: "0" }}
                  />
                </div>
              );
            })}
      </div>
      <button
        className="StartBtn"
        onClick={() => {
          navigate("/Home");
        }}
      >
        Start Ordering!
      </button>
      <p className="TableNumber">table number: {randomTableNumber}</p>
    </div>
  );
}

export default LandingPage;
