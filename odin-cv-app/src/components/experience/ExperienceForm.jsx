/* eslint-disable react/prop-types */
import { validateForm } from '../../utils/formValidation';
import TextInput from '../form/TextInput';
import FormBtns from '../form/FormBtns';
import '../../styles/form/form.scss';
import TextArea from '../form/TextArea';

function ExperienceForm({
  experience,
  setExperience,
  updateList,
  resetStates,
}) {
  return (
    <form
      noValidate
      onSubmit={(e) => {
        if (validateForm(e)) {
          updateList();
          e.target.reset();
        }
      }}
      onReset={resetStates}
      autoComplete="off"
    >
      <input type="hidden" name="id" value={experience.id} />
      <TextInput
        id="company"
        name="Company name"
        value={experience.company}
        setValue={(pCompany) =>
          setExperience({ ...experience, company: pCompany })
        }
        required={true}
        placeholder="Microsoft"
      />
      <TextInput
        id="position"
        name="Position Title"
        value={experience.position}
        setValue={(pPosition) =>
          setExperience({ ...experience, position: pPosition })
        }
        required={true}
        placeholder="Software engineer"
      />
      <TextInput
        id="start-date-experience"
        name="Start date"
        value={experience.startDate}
        setValue={(pStartDate) =>
          setExperience({ ...experience, startDate: pStartDate })
        }
        required={true}
        placeholder="04/2018"
      />
      <TextInput
        id="end-date-experience"
        name="End date"
        value={experience.endDate}
        setValue={(pEndDate) =>
          setExperience({ ...experience, endDate: pEndDate })
        }
        required={true}
        placeholder="02/2019 or present"
      />
      <TextInput
        id="location-experience"
        name="Location"
        value={experience.location}
        setValue={(pLocation) =>
          setExperience({ ...experience, location: pLocation })
        }
        required={false}
        placeholder="City, Country"
      />
      <TextArea
        id="description"
        name="Description"
        value={experience.description}
        setValue={(pDescription) =>
          setExperience({ ...experience, description: pDescription })
        }
        required={false}
        placeholder="Description of your professional experience"
      />

      <FormBtns />
    </form>
  );
}

export default ExperienceForm;
