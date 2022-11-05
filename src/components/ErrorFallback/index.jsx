import React from "react";
import "./index.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="center">
      <div className="error-fallback" role="alert">
        <h1> {error.name} </h1>
        <h2> {error.message} </h2>
        <button onClick={resetErrorBoundary}> Try again </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
