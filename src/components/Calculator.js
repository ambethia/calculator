import React from 'react'

function Button({ children }) {
  return <button className="button">{children}</button>
}

export function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <Button>AC</Button>
        <Button>&plusmn;</Button>
        <Button>&#37;</Button>
        <Button>&divide;</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>&times;</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>&minus;</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>&plus;</Button>
      </div>
    </div>
  )
}
