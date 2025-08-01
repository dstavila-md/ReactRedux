import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { removeCar } from '../store';

const filteredCars = createSelector(
  [(state) => state.cars.carList, (state) => state.cars.searchTerm],
  (carList, searchTerm) => {
    return carList.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(filteredCars);
  const name = useSelector((state) => state.form.name);

  const handleCarDelete = (car) => {
    // Dispatch delete action
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className='button is-danger'
          onClick={() => {
            handleCarDelete(car);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
