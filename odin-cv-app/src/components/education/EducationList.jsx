/* eslint-disable react/prop-types */
import '../../styles/EditableList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EducationForm from './EducationForm';
import ListItem from '../ListItem';
import { useState } from 'react';

function EducationList({ listItems, setListItems }) {
  const [education, setEducation] = useState({
    id: '',
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const [showForm, setShowForm] = useState(false);

  function updateListItem() {
    const newListItems = [...listItems];
    if (education.id !== '') {
      newListItems[education.id] = education;
      setListItems(newListItems);
    } else {
      newListItems.push({
        ...education,
        id: listItems.length,
      });
      setListItems(newListItems);
    }
  }

  function resetStates() {
    setEducation({
      id: '',
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });
    setShowForm(false);
  }

  function fillForm(pItem) {
    setEducation({
      id: pItem.id,
      school: pItem.school,
      degree: pItem.degree,
      startDate: pItem.startDate,
      endDate: pItem.endDate,
      location: pItem.location,
    });
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
          education={education}
          setEducation={setEducation}
          updateList={updateListItem}
          resetStates={resetStates}
        ></EducationForm>
      )}
    </div>
  );
}

export default EducationList;
