import React, { useState } from 'react'
import cx from 'classnames'

function Button({ x2, op, fn, children }) {
  return <button className={cx('button', { x2, op, fn })}>{children}</button>
}

export function Calculator() {
  const [leftOperand, setLeftOperand] = useState(0)
  const [rightOperand, setRightOperand] = useState(0)

  function num(value) {
    return () => {
      let newNumber = leftOperand * 10
      newNumber += value
      setLeftOperand(newNumber)
    }
  }

  return (
    <div className="calculator">
      <div className="display">{leftOperand}</div>
      <div className="buttons">
        <Button fn>AC</Button>
        <Button fn>&#177;</Button>
        <Button fn>&#37;</Button>
        <Button op>&#247;</Button>
        <Button onClick={num(7)}>7</Button>
        <Button onClick={num(8)}>8</Button>
        <Button onClick={num(9)}>9</Button>
        <Button op>&#215;</Button>
        <Button onClick={num(4)}>4</Button>
        <Button onClick={num(5)}>5</Button>
        <Button onClick={num(6)}>6</Button>
        <Button op>&#8722;</Button>
        <Button onClick={num(1)}>1</Button>
        <Button onClick={num(2)}>2</Button>
        <Button onClick={num(3)}>3</Button>
        <Button op>&#43;</Button>
        <Button x2 onClick={num(0)}>
          0
        </Button>
        <Button>.</Button>
        <Button op>&#61;</Button>
      </div>
    </div>
  )
}
