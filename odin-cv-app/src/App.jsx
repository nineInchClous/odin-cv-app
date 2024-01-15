import './App.scss';
import Accordion from './components/Accordion';
import Input from './components/Input';
import SimpleInput from './components/SimpleInput';
import Form from './components/Form';

function App() {
  return (
    <>
      <Accordion title="Personal Details">
        <SimpleInput
          id="full-name"
          label="Full name"
          type="text"
          placeholder="First and last name"
        />
        <SimpleInput
          id="email"
          label="Email"
          type="email"
          placeholder="example@mail.com"
        />
        <SimpleInput
          id="phone"
          label="Phone number"
          type="tel"
          placeholder="555 555 5555"
        />
        <SimpleInput
          id="address"
          label="Address"
          type="text"
          placeholder="City, Country"
        />
      </Accordion>
      <Accordion title="Education">
        <Form>
          <Input
            id="school"
            label="School"
            type="text"
            required={true}
            placeholder="School or University name"
          />
          <Input
            id="degree"
            label="Degree"
            type="text"
            required={true}
            placeholder="Degree or field of study"
          />
          <Input
            id="start-date"
            label="Start date"
            type="text"
            placeholder="04/2018"
            required={true}
          />
          <Input
            id="end-date"
            label="End date"
            type="text"
            placeholder="02/2019 or present"
            required={true}
          />
          <Input
            id="location"
            label="Location"
            type="text"
            placeholder="City, Country"
          />
        </Form>
      </Accordion>
    </>
  );
}

export default App;
