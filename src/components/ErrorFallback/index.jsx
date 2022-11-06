import React from "react";
import { Helmet } from "react-helmet";
import "./index.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="center">
      <Helmet>
        <title>Error - Theobano</title>
      </Helmet>
      <div className="error-fallback" role="alert">
        <h1> {error.name} </h1>
        <h2> {error.message} </h2>
        <button onClick={resetErrorBoundary}> Try again </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
