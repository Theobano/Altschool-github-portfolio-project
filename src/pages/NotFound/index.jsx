import React from "react";
import { Helmet } from "react-helmet";
import "./index.css";

function NotFound() {
  return (
    <div className="center">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
    </div>
  );
}

export default NotFound;
