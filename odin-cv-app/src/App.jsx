import './App.scss';
import Accordion from './components/Accordion';
import SimpleInput from './components/form/SimpleInput';
import EducationList from './components/education/EducationList';
import { useState } from 'react';
import ExperienceList from './components/experience/ExperienceList';
import CV from './components/CV';
import ColorInput from './components/form/ColorInput';

function App() {
  const [personalInfos, setPersonalInfos] = useState({
    fullName: 'John Doe',
    email: 'johndoe@mail.com',
    phone: '555-555-5555',
    address: '123 Avenue Doe, London, UK',
  });
  const [educationItems, setEducationItems] = useState([
    {
      id: 0,
      school: 'London City University',
      degree: 'BTS',
      startDate: '04/2018',
      endDate: '02/2019',
      location: '',
    },
    {
      id: 1,
      school: 'Hidden University',
      degree: 'DUT',
      startDate: '05/2018',
      endDate: '03/2019',
      location: 'London, UK',
    },
  ]);
  const [experienceItems, setExperienceItems] = useState([
    {
      id: 0,
      company: 'Umbrella Inc.',
      position: 'UX & UI Designer',
      startDate: '04/2018',
      endDate: '02/2019',
      location: 'New York City, US',
      description:
        'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
    },
    {
      id: 1,
      company: 'Black Mesa Labs',
      position: 'UX Research Assistant',
      startDate: '05/2018',
      endDate: '03/2019',
      location: 'Berlin, Germany',
      description:
        'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
    },
  ]);
  const [cvStyle, setCvStyle] = useState({
    color: '#0c4a6e',
  });

  return (
    <>
      <header>
        <h1>Another CV Generator</h1>
      </header>
      <main>
        <aside>
          <Accordion title="Personal Details">
            <SimpleInput
              id="full-name"
              value={personalInfos.fullName}
              setValue={(pFullName) =>
                setPersonalInfos({ ...personalInfos, fullName: pFullName })
              }
              label="Full name"
              type="text"
              placeholder="First and last name"
            />
            <SimpleInput
              id="email"
              value={personalInfos.email}
              setValue={(pEmail) =>
                setPersonalInfos({ ...personalInfos, email: pEmail })
              }
              label="Email"
              type="email"
              placeholder="example@mail.com"
            />
            <SimpleInput
              id="phone"
              value={personalInfos.phone}
              setValue={(pPhone) =>
                setPersonalInfos({ ...personalInfos, phone: pPhone })
              }
              label="Phone number"
              type="tel"
              placeholder="555 555 5555"
            />
            <SimpleInput
              id="address"
              value={personalInfos.address}
              setValue={(pAddress) =>
                setPersonalInfos({ ...personalInfos, address: pAddress })
              }
              label="Address"
              type="text"
              placeholder="City, Country"
            />
          </Accordion>
          <Accordion title="Education">
            <EducationList
              listItems={educationItems}
              setListItems={setEducationItems}
            />
          </Accordion>
          <Accordion title="Experience">
            <ExperienceList
              listItems={experienceItems}
              setListItems={setExperienceItems}
            />
          </Accordion>
          <Accordion title="Style">
            <ColorInput
              id="accent-color"
              title="Accent color"
              value={cvStyle.color}
              setValue={(pColor) => setCvStyle({ ...cvStyle, color: pColor })}
            />
          </Accordion>
        </aside>

        <CV
          personalInfos={personalInfos}
          educationItems={educationItems}
          experienceItems={experienceItems}
          cvStyle={cvStyle}
        />
      </main>
      <footer>
        <p>
          Copyright &copy;{' '}
          <a
            href="https://github.com/nineInchClous"
            target="_blank"
            rel="noreferrer"
          >
            Thibault Castelli
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
