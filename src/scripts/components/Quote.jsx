import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Quote = ({ quote, author }) => (
  <div>
    <br />
    <Header size="large" textAlign="center">"{quote}"</Header>
    <Header size="medium" textAlign="center">-{author}</Header>
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Quote;
