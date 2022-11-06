import React from "react";
import "./index.css";

function ToggleThemeButton() {
  return (
    <div className="">
      <button
        className="toggle-theme-button"
        onClick={() => {
          const app = document.getElementById("App");
          app.classList.toggle("dark");
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ToggleThemeButton;
