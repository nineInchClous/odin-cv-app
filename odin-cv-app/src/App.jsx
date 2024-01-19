import './App.scss';
import Accordion from './components/Accordion';
import SimpleInput from './components/form/SimpleInput';
import EducationList from './components/education/EducationList';
import { useState } from 'react';
import ExperienceList from './components/experience/ExperienceList';
import CV from './components/CV';
import ColorInput from './components/form/ColorInput';
import ExampleBtns from './components/ExampleBtns';

function App() {
  const [personalInfos, setPersonalInfos] = useState({});
  const [educationItems, setEducationItems] = useState([]);
  const [experienceItems, setExperienceItems] = useState([]);
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
          <ExampleBtns
            setPersonalInfos={setPersonalInfos}
            setEducationItems={setEducationItems}
            setExperienceItems={setExperienceItems}
          />
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
          <div className="print">
            <button
              className="print-btn"
              type="button"
              onClick={() => {
                window.print();
              }}
            >
              Print
            </button>
          </div>
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
