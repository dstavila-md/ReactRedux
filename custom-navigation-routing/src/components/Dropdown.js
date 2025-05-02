import { useState } from 'react';

function Dropdon({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  };

  const handleOptionClick = (option) => {
    //Close dropdown when an option is clicked
    setIsOpen(false);

    //Do something with the selected option
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleClick(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>Select</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdon;
