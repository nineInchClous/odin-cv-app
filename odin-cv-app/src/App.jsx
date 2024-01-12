import './App.css';
import Accordion from './components/Accordion';
import Input from './components/Input';

function App() {
  return (
    <>
      <Accordion title="Accordion test">
        <Input id="test" label="text input" type="text" />
      </Accordion>
    </>
  );
}

export default App;
