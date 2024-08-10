import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./css/LandingPage.css";

function LandingPage({ allRestrictions, selectedRestrictions, setSelectedRestrictions }) {
  const navigate = useNavigate();
  const [randomTableNumber, setRandomTableNumber] = useState(0);

  useEffect(() => {
    setRandomTableNumber(Math.floor(Math.random() * 100 + 1));
  }, []);

  // handle checkbox for later usage
  const handleCheckboxChange = (event) => {
    const { target } = event;
    const { value } = target;

    if (target.checked) {
      setSelectedRestrictions([...selectedRestrictions, value]);
    } else {
      setSelectedRestrictions(selectedRestrictions.filter((item) => item !== value));
    }
  };

  return (
    <div className="LandingPage">
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
                <div className="Restriction" key={index}>
                  <input
                    type="checkbox"
                    id={restriction}
                    name={restriction}
                    value={restriction}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={restriction}>{restriction}</label>
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
      <p className="TableNumber">
        table number: {randomTableNumber}
      </p>
    </div>
  );
}

export default LandingPage;
