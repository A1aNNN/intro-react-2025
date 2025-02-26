import React, { useState } from 'react';

const ExperienceCard = ({ company, role, tasks }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="experience-card" onClick={toggleCard}>
      <h3>{company}</h3>
      <h4>{role}</h4>
      {isOpen && <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>}
    </div>
  );
};

export default ExperienceCard;
