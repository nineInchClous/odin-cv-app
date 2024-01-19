/* eslint-disable react/prop-types */
import { validateForm } from '../../utils/formValidation';
import TextInput from '../form/TextInput';
import FormBtns from '../form/FormBtns';
import '../../styles/form/form.scss';

function EducationForm({ education, setEducation, updateList, resetStates }) {
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
      <input type="hidden" name="id" value={education.id} />
      <TextInput
        id="school"
        name="School"
        value={education.school}
        setValue={(pSchool) => setEducation({ ...education, school: pSchool })}
        required={true}
        placeholder="School or University name"
      />
      <TextInput
        id="degree"
        name="Degree"
        value={education.degree}
        setValue={(pDegree) => setEducation({ ...education, degree: pDegree })}
        required={true}
        placeholder="Degree or field of study"
      />
      <TextInput
        id="start-date"
        name="Start date"
        value={education.startDate}
        setValue={(pStartDate) =>
          setEducation({ ...education, startDate: pStartDate })
        }
        required={true}
        placeholder="04/2018"
      />
      <TextInput
        id="end-date"
        name="End date"
        value={education.endDate}
        setValue={(pEndDate) =>
          setEducation({ ...education, endDate: pEndDate })
        }
        required={true}
        placeholder="02/2019 or present"
      />
      <TextInput
        id="location"
        name="Location"
        value={education.location}
        setValue={(pLocation) =>
          setEducation({ ...education, location: pLocation })
        }
        required={false}
        placeholder="City, Country"
      />

      <FormBtns />
    </form>
  );
}

export default EducationForm;
