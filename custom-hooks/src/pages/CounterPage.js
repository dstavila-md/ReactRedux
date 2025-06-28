import useCounter from '../hooks/use-counter';
import Button from '../components/Button';

function CounterPage({ initialCount }) {
  const { count, handleClick } = useCounter(initialCount);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default CounterPage;
