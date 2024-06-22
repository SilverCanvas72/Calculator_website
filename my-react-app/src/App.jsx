import React, { useState } from 'react';
import Output from './Output.jsx';
import Buttons from './Buttons.jsx';

function App() {
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value == 'AC') {
      setOutput('');
    } else if (value == '=') {
      try {
        setOutput(eval(output));
      } catch {
        setOutput('Error');
      }
    } else {
      setOutput((prev) => prev + value);
    }
  };

  return (
    <div className='calculator'>
      <Output output={output} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
