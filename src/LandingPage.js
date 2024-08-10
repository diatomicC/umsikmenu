import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./css/LandingPage.css";

function MenuDetail({ allRestrictions, setSelectedRestrictions }) {
  const navigate = useNavigate();
  // handle checkbox for later usage
  // todo

  return (
    <div className="LandingPage">
      <p className="Title">Samson<br/>Suta Jajang</p>
      <p className="Caution">⚠️ Select all food restrictions ⚠️</p>
      <div className="RestrictionsList">
        {allRestrictions.length <= 0
          ? ""
          : allRestrictions.map((restriction) => {
              return (
                <div className="Restriction">
                  <input
                    type="checkbox"
                    id={restriction}
                    name={restriction}
                    value={restriction}
                  />
                  <label for={restriction}>{restriction}</label>
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
        table number {Math.floor(Math.random() * 100 + 1)}
      </p>
    </div>
  );
}

export default MenuDetail;
