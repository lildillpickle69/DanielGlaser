import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Section } from '../containers';
import { aerospace, pcds, education, lcls, darkmatter, skills, ecs } from '../constants/ResumeInfo';

const sections = [
  {
    sectionheader: 'Education',
    sectionarray: [education]
  },
  {
    sectionheader: 'Experience',
    sectionarray: [aerospace, pcds, lcls, darkmatter]
  },
  {
    sectionheader: 'Technical Skills',
    sectionarray: [skills]
  },
  {
    sectionheader: 'Extracurriculars',
    sectionarray: [ecs]
  }
];


const Resume = () => {
  const sectionitems = sections.map(item =>
    (<Section
      key={item.sectionheader}
      sectionheader={item.sectionheader}
      sectionarray={item.sectionarray}
    />));
  return (
    <Segment.Group raised>
      {sectionitems}
    </Segment.Group>
  );
};

export default Resume;
