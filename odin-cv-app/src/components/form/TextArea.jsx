/* eslint-disable react/prop-types */
import '../../styles/form/TextInput.scss';
import { validateInput } from '../../utils/formValidation';

function TextArea({ id, name, value, setValue, required, placeholder }) {
  return (
    <div className="input">
      <label htmlFor={id}>
        {name}
        {required && <span>*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        onBlur={(e) => validateInput(e.target)}
        rows={4}
      />
      <span className="input-error"></span>
    </div>
  );
}

export default TextArea;
