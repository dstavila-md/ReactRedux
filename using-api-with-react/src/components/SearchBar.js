import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit('cars');
  };

  const onChangeHandler = (event) => {
    setTerm(event.target.value);
    console.log(term);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={onChangeHandler} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;
