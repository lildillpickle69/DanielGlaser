import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { NavBar, Resume, HomePage, Triathlon, About, Blog } from '../views';
import { Header, Footer } from '../containers';

const App = () => (
  <HashRouter basename="/">
    <Grid divided="vertically">
      <Grid.Row>
        <Header />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2} floated="left" textAlign="center">
          <Route component={NavBar} />
        </Grid.Column>
        <Grid.Column width={12} floated="left">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Resume" component={Resume} />
            <Route exact path="/UCLATriathlon" component={Triathlon} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Blog" component={Blog} />
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

