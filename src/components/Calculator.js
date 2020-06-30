import React from 'react'
import cx from 'classnames'

function Button({ x2: double, children }) {
  return <button className={cx('button', { double })}>{children}</button>
}

export function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <Button fn>AC</Button>
        <Button fn>&#177;</Button>
        <Button fn>&#37;</Button>
        <Button op>&#247;</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button op>&#215;</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button op>&#8722;</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button op>&#43;</Button>
        <Button x2>0</Button>
        <Button>.</Button>
        <Button op>&#61;</Button>
      </div>
    </div>
  )
}
