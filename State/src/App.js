import { useState } from 'react';

import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'gator', 'horse', 'heart'];
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  const handleClick = () => {
    setAnimals((prevAnimals) => {
      return [...prevAnimals, getRandomAnimal()];
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {renderedAnimals}
    </div>
  );
}

export default App;
