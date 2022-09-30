import React from 'react';
import checkCashRegister from './functionals/checkCash.js';
import { Button } from './components/Button.js';
import { buttons } from './reference/buttons.js';
import { outputDiv, cidStyle } from './styles/cid.js';
import { evaluate } from 'mathjs';

const { useState } = React;

export default function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const getResult = () => {
    console.log(input.length);
    setOutput(evaluate(input));

    // if (input.length === 3) {
    //   setOutput(evaluate(...input));
    // }
  };

  const buttonHandler = (e) => {
    if (!isNaN(e.target.value)) {
      setInput((prev) => prev + e.target.value);
    }

    setInput([...input, e.target.value]);
    // console.log(!isNaN(e.target.value));
  };

  return (
    <div>
      <div>
        <div style={outputDiv}>
          <span>{output}</span>
          <span>{input}</span>
        </div>
      </div>

      <div style={cidStyle}>
        <div style={{ gridRow: '3' }}>
          {buttons.symbols.map((symbol) => (
            <Button
              key={symbol}
              name={symbol}
              handler={symbol === '=' ? getResult : buttonHandler}
            />
          ))}
        </div>
        <div style={{ gridRow: '4' }}>
          {buttons.numbers.map((number) => (
            <Button key={number} name={number} handler={buttonHandler} />
          ))}
        </div>
        <div style={{ gridRow: '5' }}>
          <Button name={'.'} />
          <Button name={','} />
        </div>
        <div style={{ gridRow: '6' }}>
          {buttons.options.map((option) => (
            <Button key={option} name={option} handler={() => ''} />
          ))}
        </div>
      </div>
    </div>
  );
}
