import React from "react";
import "./App.css";
import Card from "./Component/Card";
import { imageData } from "./utils/imageData";

function App() {
  return (
    <div className="grid-container">
      {imageData.map((image, index) => (
        <Card
          key={index}
          src={image.src}
          title={image.title}
          description={image.description}
        />
      ))}
    </div>
  );
}

export default App;
