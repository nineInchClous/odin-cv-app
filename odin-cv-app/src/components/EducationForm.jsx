import '../styles/form.scss';
import { validateForm, validateInput } from '../utils/formValidation';
import { useState } from 'react';

function EducationForm({
  id,
  setId,
  school,
  setSchool,
  degree,
  setDegree,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
  setShowForm,
}) {
  return (
    <form
      noValidate
      onSubmit={(e) => {
        if (validateForm(e)) {
          // Save in localstorage
          e.target.reset();
        }
      }}
      onReset={() => {
        setId('');
        setSchool('');
        setDegree('');
        setStartDate('');
        setEndDate('');
        setLocation('');
        setShowForm(false);
      }}
    >
      <input type="hidden" name="id" value={id} />
      <div className="input">
        <label htmlFor="school">
          School
          <span>*</span>
        </label>
        <input
          id="school"
          type="text"
          value={school}
          placeholder="School or University name"
          onChange={(e) => setSchool(e.target.value)}
          required={true}
          data-name="school"
          onBlur={(e) => validateInput(e.target)}
        />
        <span className="input-error"></span>
      </div>
      <div className="input">
        <label htmlFor="degree">
          Degree
          <span>*</span>
        </label>
        <input
          id="degree"
          type="text"
          value={degree}
          placeholder="Degree or field of study"
          onChange={(e) => setDegree(e.target.value)}
          required={true}
          data-name="degree"
          onBlur={(e) => validateInput(e.target)}
        />
        <span className="input-error"></span>
      </div>
      <div className="input">
        <label htmlFor="start-date">
          Start date
          <span>*</span>
        </label>
        <input
          id="start-date"
          type="text"
          value={startDate}
          placeholder="04/2018"
          onChange={(e) => setStartDate(e.target.value)}
          required={true}
          data-name="start date"
          onBlur={(e) => validateInput(e.target)}
        />
        <span className="input-error"></span>
      </div>
      <div className="input">
        <label htmlFor="end-date">
          End date
          <span>*</span>
        </label>
        <input
          id="end-date"
          type="text"
          value={endDate}
          placeholder="02/2019 or present"
          onChange={(e) => setEndDate(e.target.value)}
          required={true}
          data-name="end date"
          onBlur={(e) => validateInput(e.target)}
        />
        <span className="input-error"></span>
      </div>
      <div className="input">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          placeholder="City, Country"
          onChange={(e) => setLocation(e.target.value)}
          data-name="location"
          onBlur={(e) => validateInput(e.target)}
        />
        <span className="input-error"></span>
      </div>

      <div className="form-btns">
        <button type="reset" className="cancel-btn">
          Cancel
        </button>
        <button type="submit" className="save-btn">
          Save
        </button>
      </div>
    </form>
  );
}

export default EducationForm;
