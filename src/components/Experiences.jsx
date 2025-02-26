import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experiences = () => {
  const experiences = [
    {
      company: 'Google',
      role: 'Software Engineer',
      tasks: [
        'Sent everyone a GCal invite to my birthday',
        'Drove the Google Maps street view van',
      ]
    },
    {
      company: 'Meta',
      role: 'Product Manager',
      tasks: [
        'Banned people from the Metaverse',
        'Got fired after reviving the Facebook poke feature',
      ]
    },
    {
      company: 'Amazon',
      role: 'CEO',
      tasks: [
        'Finished The Boys on Prime Video',
        'Gave myself free shipping on blind boxes',
      ]
    }
  ];

  return (
    <div className="experiences-section">
      <h2>Experience</h2>
      
      <div className="experiences-list">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} company={exp.company} role={exp.role} tasks={exp.tasks} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
