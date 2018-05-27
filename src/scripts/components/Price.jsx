import React from 'react';
import { Statistic, Icon, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Price = ({ price, change, direction }) => (
  <Container text textAlign="center">
    <Statistic>
      <Statistic.Value>${price}</Statistic.Value>
      <Statistic.Label>
        {change}%
        <Icon name={`chevron ${direction}`} />
      </Statistic.Label>
    </Statistic>
  </Container>
);

Price.propTypes = {
  price: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['up', 'down']).isRequired
};

export default Price;
