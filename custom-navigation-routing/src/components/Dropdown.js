import { useState } from 'react';

function Dropdon({ options, value, onChange }) {
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
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  let content = value?.label || 'Select...';

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdon;
