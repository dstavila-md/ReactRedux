import { useSelector } from 'react-redux';

function CarList() {
  const cars = useSelector((state) => {
    return state.cars.carList;
  });
  return <div>CarList</div>;
}

export default CarList;
