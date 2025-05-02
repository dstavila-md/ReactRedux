import Dropdon from './components/Dropdown';

function App() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return <Dropdon options={options} />;
}

export default App;
