import Accordion from './components/Accordion';
import Button from './components/Button';

function App() {
  const items = [
    {
      label: 'Can I use React on a project ?',
      content: 'You can use React on any project you want.',
    },
    {
      label: 'Can I use JS on a project ?',
      content: 'You can use JS on any project you want.',
    },
    {
      label: 'Can I use CSS on a project ?',
      content: 'You can use CSS on any project you want.',
    },
  ];
  return <Accordion />;
}

export default App;
