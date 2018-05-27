import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon, Grid } from 'semantic-ui-react';

const NavBar = ({ location }) => (
  <Menu vertical pointing fluid size="large">
    <Menu.Item as={Link} to="/" active={location.pathname === '/'}>
      Main Page
    </Menu.Item>
    <Menu.Item as={Link} to="/About" active={location.pathname === '/About'}>
      About
    </Menu.Item>
    <Menu.Item as={Link} to="/Blog" active={location.pathname === '/Blog'}>
      Blog
    </Menu.Item>
    <Menu.Item as={Link} to="/Resume" active={location.pathname === '/Resume'}>
      Resume
    </Menu.Item>
    <Menu.Item as={Link} to="/Contact" active={location.pathname === '/Contact'}>
      Contact
    </Menu.Item>
    <Menu.Item>
      <Grid columns="equal" stackable centered padded>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Icon fitted circular name="facebook square" size="small" color="black" />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Icon fitted circular name="twitter square" size="small" color="black" />
            </a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Icon fitted circular name="instagram" size="small" color="black" />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Icon fitted circular name="twitter square" size="small" color="black" />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Menu.Item>
  </Menu>
);

export default withRouter(NavBar);
