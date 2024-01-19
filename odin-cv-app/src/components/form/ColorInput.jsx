/* eslint-disable react/prop-types */
import '../../styles/form/ColorInput.scss';

function ColorInput({ id, value, setValue, title }) {
  return (
    <div className="color-container">
      <label htmlFor={id}>{title}</label>
      <input
        type="color"
        id={id}
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </div>
  );
}

export default ColorInput;
