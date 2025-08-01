import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

const totalCost = createSelector(
  [(state) => state.cars.carList, (state) => state.cars.searchTerm],
  (carList, searchTerm) => {
    const filteredCars = carList.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredCars.reduce((total, car) => {
      return total + car.cost;
    }, 0);
  }
);

function CarValue() {
  const cost = useSelector(totalCost);
  return <div className='car-value'>Total Cost: ${cost}</div>;
}

export default CarValue;
