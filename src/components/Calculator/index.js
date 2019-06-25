import React from 'react'
import { Button } from '../Button'
import { Display } from '../Display'
import './styles.css'

// Heplers to use the calculator
const operations = {
  sum: (a, b) => a + b,
  dif: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b
}

/**
 * TODO: implement the Calculator.
 */
export const Calculator = () => {
  // TODO: you'll have to create some state values
  return (
    <div className="App-calculator">
      <Display />
      <div className="App-calculator-cols">
        <div className="App-calculator-buttons">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <div className="App-calculator-operations">
          <Button flavor="operation" />
        </div>
      </div>
    </div>
  )
}
