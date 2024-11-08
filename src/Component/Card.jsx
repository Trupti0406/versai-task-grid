import React from "react";
import "./Card.css";
const Card = ({ src, title }) => {
  return (
    <div className="card">
      <img src={src} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
