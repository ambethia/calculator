import React from 'react'
import cx from 'classnames'

function Button({ children }) {
  return <button className="button">{children}</button>
}

export function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <Button>AC</Button>
        <Button>&#880;</Button>
        <Button>&#37;</Button>
        <Button>&#247;</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>&#215;</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>&#8722;</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>&#43;</Button>
        <Button double>0</Button>
        <Button>.</Button>
        <Button>&#61;</Button>
      </div>
    </div>
  )
}
