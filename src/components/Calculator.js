import React from "react";

function Button({ label }) {
  return <button className="button">{label}</button>;
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
