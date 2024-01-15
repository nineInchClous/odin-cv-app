import '../styles/Form.scss';
import { validateInput } from '../utils/formValidation';

function validateForm(e) {
  e.preventDefault();

  const inputs = e.target.querySelectorAll('input, select, textarea');
  let validForm = true;

  Object.values(inputs).forEach((input) => {
    if (!validateInput(input)) {
      validForm = false;
    }
  });

  return validForm;
}

function Form({ children }) {
  return (
    <form noValidate onSubmit={(e) => validateForm(e)}>
      {children}
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

export default Form;
