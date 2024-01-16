/* eslint-disable react/prop-types */
import { validateForm } from '../utils/formValidation';
import TextInput from './TextInput';
import FormBtns from './FormBtns';
import '../styles/form.scss';
import TextArea from './TextArea';

function ExperienceForm({ formValues, updateList, resetStates }) {
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
    >
      <input type="hidden" name="id" value={formValues.id} />
      <TextInput
        id="company"
        name="Company name"
        value={formValues.company}
        setValue={formValues.setCompany}
        required={true}
        placeholder="Microsoft"
      />
      <TextInput
        id="position"
        name="Position Title"
        value={formValues.position}
        setValue={formValues.setPosition}
        required={true}
        placeholder="Software engineer"
      />
      <TextInput
        id="start-date"
        name="Start date"
        value={formValues.startDate}
        setValue={formValues.setStartDate}
        required={true}
        placeholder="04/2018"
      />
      <TextInput
        id="end-date"
        name="End date"
        value={formValues.endDate}
        setValue={formValues.setEndDate}
        required={true}
        placeholder="02/2019 or present"
      />
      <TextInput
        id="location"
        name="Location"
        value={formValues.location}
        setValue={formValues.setLocation}
        required={false}
        placeholder="City, Country"
      />
      <TextArea
        id="description"
        name="Description"
        value={formValues.description}
        setValue={formValues.setDescription}
        required={false}
        placeholder="Description of your professional experience"
      />

      <FormBtns />
    </form>
  );
}

export default ExperienceForm;
