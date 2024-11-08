import React from "react";
import "./Card.css";

const Card = ({ src, title, description }) => {
  return (
    <div className="card">
      <img src={src} alt={title} className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
