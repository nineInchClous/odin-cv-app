/* eslint-disable react/prop-types */
import '../styles/EditableList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ExperienceForm from './ExperienceForm';
import ListItem from './ListItem';
import { useState } from 'react';

function ExperienceList({ listItems, setListItems }) {
  const [id, setId] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const formValues = {
    id,
    company,
    setCompany,
    position,
    setPosition,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    location,
    setLocation,
    description,
    setDescription,
  };

  const [showForm, setShowForm] = useState(false);

  function updateListItem() {
    const newListItems = listItems;
    if (id) {
      newListItems[id] = {
        id,
        company,
        position,
        startDate,
        endDate,
        location,
        description,
      };
      setListItems(listItems);
    } else {
      const newId = listItems.length;
      newListItems.push({
        id: newId,
        company,
        position,
        startDate,
        endDate,
        location,
        description,
      });
      setListItems(newListItems);
    }
  }

  function resetStates() {
    setId('');
    setCompany('');
    setPosition('');
    setStartDate('');
    setEndDate('');
    setLocation('');
    setDescription('');
    setShowForm(false);
  }

  function fillForm(pItem) {
    setId(pItem.id);
    setCompany(pItem.company);
    setPosition(pItem.position);
    setStartDate(pItem.startDate);
    setEndDate(pItem.endDate);
    setLocation(pItem.location);
    setDescription(pItem.description);
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
        >
          <FontAwesomeIcon icon={faPlus} />
          Add
        </button>
      )}

      {showForm && (
        <ExperienceForm
          formValues={formValues}
          updateList={updateListItem}
          resetStates={resetStates}
        />
      )}
    </div>
  );
}

export default ExperienceList;
