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


      <div style={{ display: 'grid', gridTemplateAreas: '"1 2 3 4 5 6"' }}>
        {buttons.names.map((name) => (
          <Button key={name} name={name} handler={buttonHandler} />
        ))}
      </div>
    </div>
  );
}
