import React from "react";
import "./index.css";

function TestError() {
  const [error, setError] = React.useState(false);
  if (error) {
    throw new Error("Error from TestError component");
  }

  return (
    <div className="center">
      <div className="test-error">
        <h1>Test Error</h1>
        <button onClick={() => setError(true)}>Throw Error</button>
      </div>
    </div>
  );
}

export default TestError;
