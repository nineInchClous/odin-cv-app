/* eslint-disable react/prop-types */
import '../../styles/EditableList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ExperienceForm from './ExperienceForm';
import ListItem from '../ListItem';
import { useState } from 'react';

function ExperienceList({ listItems, setListItems }) {
  const [experience, setExperience] = useState({
    id: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  const [showForm, setShowForm] = useState(false);

  function updateListItem() {
    const newListItems = [...listItems];
    if (experience.id !== '') {
      newListItems[experience.id] = experience;
      setListItems(newListItems);
    } else {
      newListItems.push({
        ...experience,
        id: listItems.length,
      });
      setListItems(newListItems);
    }
  }

  function resetStates() {
    setExperience({
      id: '',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });
    setShowForm(false);
  }

  function fillForm(pItem) {
    setExperience({
      id: pItem.id,
      company: pItem.company,
      position: pItem.position,
      startDate: pItem.startDate,
      endDate: pItem.endDate,
      location: pItem.location,
      description: pItem.description,
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
              title={item.company}
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
          aria-label="Add an experience item"
        >
          <FontAwesomeIcon icon={faPlus} />
          Add
        </button>
      )}

      {showForm && (
        <ExperienceForm
          experience={experience}
          setExperience={setExperience}
          updateList={updateListItem}
          resetStates={resetStates}
        />
      )}
    </div>
  );
}

export default ExperienceList;
