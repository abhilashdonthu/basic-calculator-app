import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculate = () => {
    let result = 0;
    switch (operator) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = 'Invalid operator';
    }
    setResult(result);
  };

  return (
    <div>
      <h2 class="cal-heading">Basic Calculator</h2>
      <input type="number" value={num1} onChange={handleNum1Change} class="field text-box" placeholder="Number 1" />
      <select value={operator} onChange={handleOperatorChange} class="field drop-down">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={handleNum2Change} class="field text-box" placeholder="Number 2" />
      <button onClick={calculate} class="field btn-calculate">=</button>
      <p class="result-section"><b>Result: {result}</b></p>
    </div>
  );
}

export default Calculator;