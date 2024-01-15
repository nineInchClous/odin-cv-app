import '../styles/SimpleInput.scss';
import { useState } from 'react';

function SimpleInput({ id, label, type, placeholder }) {
  const [value, setValue] = useState('');

  return (
    <div className="simple-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SimpleInput;
