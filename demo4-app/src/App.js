import React, { useState } from "react";
import Sunflower from "./sunflower";
import "./App.css"; // Import the CSS file

function App() {
  const [showInfo, setShowInfo] = useState(false);

  const btn = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="App">
      <h1>Sunflower</h1>
      <center>
        <header>
          <img
            src="http://getwallpapers.com/wallpaper/full/5/1/7/820343-sunflowers-wallpaper-1920x1200-for-iphone-6.jpg"
            alt="Sunflower"
            className="sunflower-img" 
          />
        </header>

        <button onClick={btn} className="button">
          {showInfo ? "Hide" : "Read More"}
        </button>
      </center>

      {showInfo && (
        <section id="info">
          <div className="content">
            <Sunflower />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
