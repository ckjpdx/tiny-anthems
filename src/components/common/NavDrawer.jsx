import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './NavDrawer.css';
import Login from './Login';
import { NavLink, withRouter } from 'react-router-dom';

class NavDrawer extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open, path) => () => {
    this.setState({
      [side]: open,
    });
    path && this.props.history.push(path);
  };

  render() {
    const regexFirstName = /^(\w+)/;
    const userName = regexFirstName.exec(this.props.appState.name);

    return (
      <div>
        <div className="NavDrawer-drawer-not-showing">
          {this.props.appState.uid &&
            <NavLink to='/user'>
              <h3 className="underline">{userName[0]}'s Castle</h3>
            </NavLink>
          }
          <NavLink to='/home'>
            <h3>Home</h3>
          </NavLink>
          <NavLink to='/faq'>
            <h3>FAQ</h3>
          </NavLink>
          <NavLink to='/about'>
            <h3>About</h3>
          </NavLink>
          <NavLink to='/portfolio'>
            <h3>Samples</h3>
          </NavLink>
          <NavLink to='/feedback'>
            <h3>Feedback</h3>
          </NavLink>
          <Login appState={this.props.appState} />
        </div>
        <div className="NavDrawer-drawer-showing">
          <FontAwesomeIcon icon={faBars} size="2x" onClick={this.toggleDrawer('top', true)}/>
          <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)} id="NavDrawer-Drawer">
          {this.props.appState.uid &&
            <React.Fragment>
              <NavLink to='/user' onClick={this.toggleDrawer('top', false)}>
                <h3>{userName[0]}'s Castle</h3>
              </NavLink>
            </React.Fragment>
          }
            <NavLink to='/home' onClick={this.toggleDrawer('top', false)}>
              <h3>Home</h3>
            </NavLink>
            <NavLink to='/faq' onClick={this.toggleDrawer('top', false)}>
              <h3>FAQ</h3>
            </NavLink>
            <NavLink to='/about' onClick={this.toggleDrawer('top', false)}>
              <h3>About</h3>
            </NavLink>
            <NavLink to='/portfolio' onClick={this.toggleDrawer('top', false)}>
              <h3>Samples</h3>
            </NavLink>
            <NavLink to='/feedback' onClick={this.toggleDrawer('top', false)}>
              <h3>Feedback</h3>
            </NavLink>
            <div id="NavDrawer-bottom">
              <Login appState={this.props.appState} />
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default withRouter(NavDrawer);
