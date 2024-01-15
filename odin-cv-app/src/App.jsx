import './App.scss';
import Accordion from './components/Accordion';
import SimpleInput from './components/SimpleInput';
import EducationList from './components/EducationList';
import { useState } from 'react';
import EducationForm from './components/EducationForm';

function App() {
  const [educationItems, setEducationItems] = useState([
    {
      id: 1,
      school: 'London City University',
      degree: 'BTS',
      startDate: '04/2018',
      endDate: '02/2019',
      location: '',
    },
    {
      id: 2,
      school: 'Hidden University',
      degree: 'DUT',
      startDate: '05/2018',
      endDate: '03/2019',
      location: 'London, UK',
    },
  ]);

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
        <EducationList
          listItems={educationItems}
          setListItems={setEducationItems}
        ></EducationList>
      </Accordion>
    </>
  );
}

export default App;
