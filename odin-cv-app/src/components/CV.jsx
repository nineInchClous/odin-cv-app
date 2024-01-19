/* eslint-disable react/prop-types */
import '../styles/CV.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

function CV({ personalInfos, educationItems, experienceItems, cvStyle }) {
  return (
    <div className="cv">
      <section className="personal" style={{ backgroundColor: cvStyle.color }}>
        <h2>{personalInfos.fullName}</h2>
        <div className="contact">
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            {personalInfos.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            {personalInfos.phone}
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            {personalInfos.address}
          </p>
        </div>
      </section>
      <section className="education">
        <h2 style={{ color: cvStyle.color }}>Education</h2>
        {educationItems.map((educationItem) => (
          <div className="education-item" key={educationItem.id}>
            <div className="time-location">
              <p>
                {educationItem.startDate} - {educationItem.endDate}
              </p>
              <p>{educationItem.location}</p>
            </div>
            <div className="school">
              <h3>{educationItem.school}</h3>
              <p>{educationItem.degree}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="experience">
        <h2 style={{ color: cvStyle.color }}>Professional Experience</h2>
        {experienceItems.map((experienceItem) => (
          <div className="experience-item" key={experienceItem.id}>
            <div className="time-location">
              <p>
                {experienceItem.startDate} - {experienceItem.endDate}
              </p>
              <p>{experienceItem.location}</p>
            </div>
            <div className="job">
              <h3>{experienceItem.company}</h3>
              <p>{experienceItem.position}</p>
              <p>{experienceItem.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CV;
