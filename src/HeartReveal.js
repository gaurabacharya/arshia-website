import React, { useState } from "react";
import "./HeartReveal.css";
import YesOnlyCheckbox from "./YesNoCheckBox";

function HeartReveal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="heart-container">
      <div
        className={`heart ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="left-half"></div>
        <div className="right-half"></div>
        {!isOpen && <p className="open-text">Open Here</p>}
      </div>
      {isOpen && (
        <div className="valentine-image-container">
          <img
            src='/images/valentines2025.png' // Update with your image path
            alt="Be My Valentine"
            className="valentine-image"
          />
          <YesOnlyCheckbox/>
        </div>
      )}
    </div>
  );
}

export default HeartReveal;
