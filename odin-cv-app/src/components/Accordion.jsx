/* eslint-disable react/prop-types */
import '../styles/Accordion.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function handleClick(e) {
  e.target.nextSibling.classList.toggle('open');
  e.target.lastChild.firstChild.classList.toggle('open');
}

function Accordion({ title, children }) {
  return (
    <div className="accordion">
      <button type="button" className="accordion-header" onClick={handleClick}>
        <h2>{title}</h2>
        <div className="icon">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </button>
      <div className="accordion-content">{children}</div>
    </div>
  );
}

export default Accordion;
