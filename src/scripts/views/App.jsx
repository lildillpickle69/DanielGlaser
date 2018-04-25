import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { HomePage, Resume } from '../views';
import { QuoteContainer, Footer } from '../containers';

const App = () => (
  <HashRouter basename="/">
    <Grid divided="vertically">
      <Grid.Row>
        <QuoteContainer />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2} floated="left" textAlign="center">
          <Route component={HomePage} />
        </Grid.Column>
        <Grid.Column width={12} floated="left">
          <Switch>
            <Route path="/Resume" component={Resume} />
          </Switch>
        </Grid.Column>
        <Grid.Column width={2} floated="left" />
      </Grid.Row>
      <Grid.Row color="black">
        <Footer />
      </Grid.Row>
    </Grid>
  </HashRouter>
);

export default App;

