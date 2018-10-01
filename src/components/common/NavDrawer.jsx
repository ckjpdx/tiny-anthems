import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './NavDrawer.css';
import Login from './Login';
import { Link, withRouter } from 'react-router-dom';

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
    const { classes } = this.props;
    return (
      <div>
        <div className="NavDrawer-drawer-not-showing">
          {this.props.appState.uid &&
            <Link to='/user'>
              <h3 className="underline">{this.props.appState.name}'s Castle</h3>
            </Link>
          }
          <Link to='/home'>
            <h3>Home</h3>
          </Link>
          <Link to='/faq'>
            <h3>FAQ</h3>
          </Link>
          <Link to='/about'>
            <h3>About</h3>
          </Link>
          <Link to='/portfolio'>
            <h3>Works</h3>
          </Link>
          <Link to='/feedback'>
            <h3>Feedback</h3>
          </Link>
          <Login appState={this.props.appState} invertColors={true} />
        </div>
        <div className="NavDrawer-drawer-showing">
          <FontAwesomeIcon icon={faBars} size="2x" onClick={this.toggleDrawer('top', true)}/>
          <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)} id="NavDrawer-Drawer">
            <Link to='/home' onClick={this.toggleDrawer('top', false)}>
              <h3>Home</h3>
            </Link>
            <Link to='/faq' onClick={this.toggleDrawer('top', false)}>
              <h3>FAQ</h3>
            </Link>
            <Link to='/about' onClick={this.toggleDrawer('top', false)}>
              <h3>About</h3>
            </Link>
            <Link to='/portfolio' onClick={this.toggleDrawer('top', false)}>
              <h3>Works</h3>
            </Link>
            <Link to='/feedback' onClick={this.toggleDrawer('top', false)}>
              <h3>Feedback</h3>
            </Link>
            <div id="NavDrawer-bottom">
              <Login appState={this.props.appState} />
              {this.props.appState.uid &&
                <React.Fragment>
                  <Link to='/user' onClick={this.toggleDrawer('top', false)}>
                    <p style={{fontFamily: 'monospace'}}>{this.props.appState.email}
                    <br />GO TO USER AREA</p>
                  </Link>
                </React.Fragment>
              }
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(NavDrawer);
