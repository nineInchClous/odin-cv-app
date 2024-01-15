import './App.scss';
import Accordion from './components/Accordion';
import Input from './components/Input';

function App() {
  return (
    <>
      <Accordion title="Personal Details">
        <Input id="full-name" label="Full name" type="text" />
        <Input id="email" label="Email" type="email" />
        <Input id="phone" label="Phone number" type="tel" />
        <Input id="address" label="Address" type="text" />
      </Accordion>
    </>
  );
}

export default App;
