/* eslint-disable react/prop-types */
import '../../styles/form/SimpleInput.scss';

function SimpleInput({ id, value, setValue, label, type, placeholder }) {
  return (
    <div className="simple-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}

export default SimpleInput;
