import { useDispatch, useSelector } from 'react-redux';
import { changeCost, changeName } from '../store';

function CarForm() {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.form.name;
  });
  const cost = useSelector((state) => state.form.cost);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const cost = parseInt(event.target.value) || 0;
    dispatch(changeCost(cost));
  };

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>
        <form>
          <div className='field-group'>
            <div className='field'>
              <label className='label'>Name</label>
              <input
                className='input is-expanded'
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className='field'>
              <label className='label'>Cost</label>
              <input
                className='input is-expanded'
                type='number'
                value={cost || ''}
                onChange={handleCostChange}
              />
            </div>
          </div>
        </form>
      </h4>
    </div>
  );
}

export default CarForm;
