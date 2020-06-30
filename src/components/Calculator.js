import React from "react";

function Button({ children }) {
  return <button className="btn">{children}</button>;
}

export function Calculator() {
  return <div className="calculator">
    <div className="display">0</div>
    <div className="buttons">
      <Button>AC</Button>
      <Button>&plusmn;</Button>
      <Button>&#37;</Button>
      <Button>&divide;</Button>
    </div>
  </div>;
}
