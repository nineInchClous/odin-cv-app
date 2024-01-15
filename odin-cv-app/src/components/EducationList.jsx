import '../styles/EditableList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import EducationForm from './EducationForm';
import { useState } from 'react';

// get listItems from localStorage
function EducationList({ listItems, setListItems }) {
  const [id, setId] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="editable-list">
      <div className="items">
        {listItems.map((item) => {
          return (
            <div className="item" key={item.id}>
              <h2>{item.school}</h2>
              <div className="item-btns">
                <button
                  type="button"
                  onClick={() => {
                    setId(item.id);
                    setSchool(item.school);
                    setDegree(item.degree);
                    setStartDate(item.startDate);
                    setEndDate(item.endDate);
                    setLocation(item.location);
                    setShowForm(true);
                  }}
                >
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setListItems(
                      listItems.filter((currItem) => item.id !== currItem.id)
                    )
                  }
                >
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {!showForm && (
        <button
          type="button"
          className="list-add-btn"
          onClick={() => setShowForm(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add
        </button>
      )}

      {showForm && (
        <EducationForm
          id={id}
          school={school}
          setSchool={setSchool}
          degree={degree}
          setDegree={setDegree}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          location={location}
          setLocation={setLocation}
          setShowForm={setShowForm}
        ></EducationForm>
      )}
    </div>
  );
}

export default EducationList;
