import React from 'react';
import PropTypes from 'prop-types';
import { Header, List, Segment } from 'semantic-ui-react';
import { ResumeItem } from '../components';

const Section = ({ sectionheader, sectionarray }) => {
  const listitems = sectionarray.map((id) => {
    const { header, array, dates } = id;
    return (
      <List.Item key={header}>
        <ResumeItem header={header} array={array} dates={dates} />
      </List.Item>
    );
  });
  return (
    <div>
      <Segment>
        <Header as="h1" content={sectionheader} />
        <List relaxed>
          <Segment.Group piled>
            {listitems}
          </Segment.Group>
        </List>
      </Segment>
    </div>
  );
};

Section.propTypes = {
  sectionheader: PropTypes.string.isRequired,
  sectionarray: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Section;
