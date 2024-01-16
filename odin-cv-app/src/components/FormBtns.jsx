import '../styles/FormBtns.scss';

function FormBtns() {
  return (
    <div className="form-btns">
      <button type="reset" className="cancel-btn">
        Cancel
      </button>
      <button type="submit" className="save-btn">
        Save
      </button>
    </div>
  );
}

export default FormBtns;
