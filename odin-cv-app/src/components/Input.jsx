import '../styles/Input.scss';
import { useState } from 'react';
import { validateInput } from '../utils/formValidation';

function Input({
  id,
  label,
  type,
  placeholder,
  required,
  pattern = '.*',
  min = 0,
  max = Number.MAX_VALUE,
  minLength = 0,
  maxLength = 9999,
}) {
  const [value, setValue] = useState('');

  return (
    <div className="input">
      <label htmlFor={id}>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        pattern={pattern}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        data-name={label}
        onBlur={(e) => validateInput(e.target)}
      />
      <span className="input-error"></span>
    </div>
  );
}

export default Input;
