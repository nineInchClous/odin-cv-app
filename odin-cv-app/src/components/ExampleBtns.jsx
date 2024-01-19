/* eslint-disable react/prop-types */
import '../styles/ExampleBtns.scss';

const personnalInfosExample = {
  fullName: 'John Doe',
  email: 'johndoe@mail.com',
  phone: '555-555-5555',
  address: '123 Avenue Doe, London, UK',
};
const educationItemsExample = [
  {
    id: 0,
    school: 'London City University',
    degree: 'BTS',
    startDate: '04/2018',
    endDate: '02/2019',
    location: 'London, UK',
  },
  {
    id: 1,
    school: 'Hidden College',
    degree: 'DUT',
    startDate: '05/2018',
    endDate: '03/2019',
    location: 'London, UK',
  },
];
const experienceItemsExample = [
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
];

function ExampleBtns({
  setPersonalInfos,
  setEducationItems,
  setExperienceItems,
}) {
  return (
    <div className="example-btns">
      <button
        type="button"
        className="load-example"
        onClick={() => {
          setPersonalInfos(personnalInfosExample);
          setEducationItems(educationItemsExample);
          setExperienceItems(experienceItemsExample);
        }}
      >
        Load example
      </button>
      <button
        type="button"
        className="clear-example"
        onClick={() => {
          setPersonalInfos({});
          setEducationItems([]);
          setExperienceItems([]);
        }}
      >
        Clear example
      </button>
    </div>
  );
}

export default ExampleBtns;
