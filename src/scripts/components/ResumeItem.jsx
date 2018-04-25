import React from 'react';
import PropTypes from 'prop-types';
import { Header, List, Segment } from 'semantic-ui-react';

const ResumeItem = ({ header, array, dates }) => {
  const listitems = array.map((id, index) => <List.Item key={`${header}${index}`} content={id} />);
  return (
    <div>
      <Segment clearing>
        <Header as="h2" content={header} floated="left" />
        <Header as="h2" content={dates} floated="right" />
        <List bulleted>
          {listitems}
        </List>
      </Segment>
    </div>
  );
};

ResumeItem.propTypes = {
  header: PropTypes.string,
  dates: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.string).isRequired
};

ResumeItem.defaultProps = {
  header: '',
  dates: ''
};

export default ResumeItem;
