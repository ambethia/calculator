import React, { useState } from 'react'
import cx from 'classnames'

function Button({ x2, op, fn, children, onClick }) {
  return (
    <button onClick={onClick} className={cx('button', { x2, op, fn })}>
      {children}
    </button>
  )
}

export function Calculator() {
  const [currentOperation, setCurrentOperation] = useState(null)
  const [leftOperand, setLeftOperand] = useState(0)
  const [rightOperand, setRightOperand] = useState(0)

  function clear() {
    setCurrentOperation(null)
    setLeftOperand(0)
    setRightOperand(0)
  }

  function num(value) {
    return () => {
      if (currentOperation && leftOperand === 0) {
        setLeftOperand(rightOperand)
        setRightOperand(value)
      } else {
        setRightOperand(rightOperand * 10 + value)
      }
    }
  }

  function op(operation) {
    return () => {
      result()
      setCurrentOperation(operation)
    }
  }

  function percent() {
    setRightOperand(rightOperand * 0.01)
  }

  function changeSign() {
    setRightOperand(rightOperand * -1)
  }

  function result() {
    switch (currentOperation) {
      case 'add':
        setRightOperand(leftOperand + rightOperand)
        break
      case 'subtract':
        setRightOperand(leftOperand - rightOperand)
        break
      case 'multiply':
        setRightOperand(leftOperand * rightOperand)
        break
      case 'divide':
        setRightOperand(leftOperand / rightOperand)
        break
      default:
        setRightOperand(rightOperand)
        break
    }
    setLeftOperand(0)
  }

  return (
    <div className="calculator">
      <div className="display">
        {parseFloat(rightOperand.toPrecision(8)).toString()}
      </div>
      <div className="buttons">
        <Button fn onClick={clear}>
          {rightOperand !== 0 || currentOperation ? 'C' : 'AC'}
        </Button>
        <Button onClick={changeSign} fn>
          &#177;
        </Button>
        <Button onClick={percent} fn>
          &#37;
        </Button>
        <Button onClick={op('divide')} op>
          &#247;
        </Button>
        <Button onClick={num(7)}>7</Button>
        <Button onClick={num(8)}>8</Button>
        <Button onClick={num(9)}>9</Button>
        <Button onClick={op('multiply')} op>
          &#215;
        </Button>
        <Button onClick={num(4)}>4</Button>
        <Button onClick={num(5)}>5</Button>
        <Button onClick={num(6)}>6</Button>
        <Button onClick={op('subtract')} op>
          &#8722;
        </Button>
        <Button onClick={num(1)}>1</Button>
        <Button onClick={num(2)}>2</Button>
        <Button onClick={num(3)}>3</Button>
        <Button onClick={op('add')} op>
          &#43;
        </Button>
        <Button x2 onClick={num(0)}>
          0
        </Button>
        <Button onClick={() => setDecimal(true)}>.</Button>
        <Button onClick={result} op>
          &#61;
        </Button>
      </div>
    </div>
  )
}
