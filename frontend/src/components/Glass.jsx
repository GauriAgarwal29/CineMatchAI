// src/components/Glass.jsx
import React from "react";
import "./Glass.css";

const Glass = ({ children, style }) => {
  return (
    <div className="glass-container" style={style}>
      {children}
    </div>
  );
};

export default Glass;
