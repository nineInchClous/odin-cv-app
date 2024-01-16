/* eslint-disable react/prop-types */
import { validateForm } from '../utils/formValidation';
import TextInput from './TextInput';
import FormBtns from './FormBtns';
import '../styles/form.scss';

function EducationForm({ formValues, updateList, resetStates }) {
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
        id="school"
        name="School"
        value={formValues.school}
        setValue={formValues.setSchool}
        required={true}
        placeholder="School or University name"
      />
      <TextInput
        id="degree"
        name="Degree"
        value={formValues.degree}
        setValue={formValues.setDegree}
        required={true}
        placeholder="Degree or field of study"
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

      <FormBtns />
    </form>
  );
}

export default EducationForm;
