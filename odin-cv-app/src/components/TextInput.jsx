/* eslint-disable react/prop-types */
import '../styles/TextInput.scss';
import { validateInput } from '../utils/formValidation';

function TextInput({ id, name, value, setValue, required, placeholder }) {
  return (
    <div className="input">
      <label htmlFor={id}>
        {name}
        {required && <span>*</span>}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        onBlur={(e) => validateInput(e.target)}
      />
      <span className="input-error"></span>
    </div>
  );
}

export default TextInput;
