import React from "react";
import "./Card.css";

const Card = ({ src, title, description }) => {
  return (
    <div className="card">
      <img src={src} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <div className="card-overlay">
        <div className="card-description">
          <h3>{title}</h3>
          <h4>{description}</h4>
          <h5>Read More {">"} </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
