// src/components/MoodDisplay.jsx
import React from "react";
import "./MoodDisplay.css";

const MoodDisplay = ({ mood }) => {
  if (!mood) return null;

  return (
    <div className="mood-display">
      <h2 className="mood-title">Your mood seems to be...</h2>
      <h1 className="mood-text">{mood}</h1>
    </div>
  );
};

export default MoodDisplay;
