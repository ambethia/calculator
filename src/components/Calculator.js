import React from "react";

function Button({ children }) {
  return <button>{children}</button>;
}

export function Calculator() {
  return <div className="calculator">
    <div className="display">0</div>
    <Button>AC</Button>
    <Button>&plusmn;</Button>
    <Button>&#37;</Button>
    <Button>&divide;</Button>
  </div>;
}
