/* eslint-disable react/prop-types */
import '../styles/EditableList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EducationForm from './EducationForm';
import ListItem from './ListItem';
import { useState } from 'react';

function EducationList({ listItems, setListItems }) {
  const [id, setId] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const formValues = {
    id,
    school,
    setSchool,
    degree,
    setDegree,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    location,
    setLocation,
  };

  const [showForm, setShowForm] = useState(false);

  function updateListItem() {
    const newListItems = listItems;
    if (id) {
      newListItems[id] = { id, school, degree, startDate, endDate, location };
      setListItems(listItems);
    } else {
      const newId = listItems.length;
      newListItems.push({
        id: newId,
        school,
        degree,
        startDate,
        endDate,
        location,
      });
      console.log(newListItems);
      setListItems(newListItems);
    }
  }

  function resetStates() {
    setId('');
    setSchool('');
    setDegree('');
    setStartDate('');
    setEndDate('');
    setLocation('');
    setShowForm(false);
  }

  function fillForm(pItem) {
    setId(pItem.id);
    setSchool(pItem.school);
    setDegree(pItem.degree);
    setStartDate(pItem.startDate);
    setEndDate(pItem.endDate);
    setLocation(pItem.location);
    setShowForm(true);
  }

  function eraseItem(pId) {
    setListItems(listItems.filter((currItem) => pId !== currItem.id));
    resetStates();
  }

  return (
    <div className="editable-list">
      <div className="items">
        {listItems.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              title={item.school}
              fillForm={fillForm}
              eraseItem={eraseItem}
            />
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
          formValues={formValues}
          updateList={updateListItem}
          resetStates={resetStates}
        ></EducationForm>
      )}
    </div>
  );
}

export default EducationList;
