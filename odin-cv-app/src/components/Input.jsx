import { useState } from 'react';
import '../styles/Input.scss';

function Input({ id, label, type }) {
  const [value, setValue] = useState('');

  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
