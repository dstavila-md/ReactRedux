import React, { useState } from 'react';
import Dropdon from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);
  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <Dropdon options={options} value={selection} onChange={handleSelection} />
  );
}

export default App;
