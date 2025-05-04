import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';

import Panel from './Panel';

function Dropdon({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      // Check if the click is outside the dropdown
      // If the dropdown is open and the click is outside, close the dropdown
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true); // Use capture phase to ensure the event is handled before it reaches the target element

    return () => {
      document.removeEventListener('click', handler, true);
    };
  }, []);

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
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {content}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdon;
