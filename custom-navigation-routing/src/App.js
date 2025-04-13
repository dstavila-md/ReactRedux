import { GoBell, GoDatabase, GoEye } from 'react-icons/go';
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary outline className='mb-5'>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase />
          Click me
        </Button>
      </div>
      <div>
        <Button warning>
          <GoEye />
          Click me
        </Button>
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
