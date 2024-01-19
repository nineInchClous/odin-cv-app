/* eslint-disable react/prop-types */
import '../styles/ListItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

function ListItem({ item, title, fillForm, eraseItem }) {
  return (
    <div className="item">
      <h2>{title}</h2>
      <div className="item-btns">
        <button
          type="button"
          onClick={() => {
            fillForm(item);
          }}
          aria-label={`Modify ${title}`}
        >
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
        </button>
        <button
          type="button"
          onClick={() => {
            eraseItem(item.id);
          }}
          aria-label={`Delete ${title}`}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default ListItem;
