import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary outline>
          Click me
        </Button>
      </div>
      <div>
        <Button danger>Click me</Button>
      </div>
      <div>
        <Button warning>Click me</Button>
      </div>
      <div>
        <Button secondary>Click me</Button>
      </div>
      <div>
        <Button success>Click me</Button>
      </div>
    </div>
  );
}

export default App;
