import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

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
    <div className='w-48 relative'>
      <div
        className='flex justify-between items-center cursor-pointer border rounded p-3 shadow-lg bg-white w-full'
        onClick={handleClick}
      >
        {content}
        <GoChevronDown className='text-lg' />
      </div>
      {isOpen && (
        <div className='absolute top-full border rounded p-3 shadow-lg bg-white w-full'>
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdon;
