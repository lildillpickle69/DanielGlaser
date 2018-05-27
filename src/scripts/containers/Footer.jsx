import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Container text>
    <Grid celled="internally" colums="equal" padded relaxed textAlign="center" inverted>
      <Grid.Row>
        <Grid.Column as={Link} to="/" textAlign="center">
        The Website of Dillon Hu
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center" columns={2}>
        <Grid.Column as={Link} to="/UCLATriathlon" textAlign="right">
          UCLA Triathlon
        </Grid.Column>
        <Grid.Column textAlign="left">
          LACDP
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Footer;
