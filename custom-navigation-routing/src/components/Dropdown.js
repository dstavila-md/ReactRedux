import { useState } from 'react';

function Dropdon({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  };

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div onClick={handleClick}>Select</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdon;
