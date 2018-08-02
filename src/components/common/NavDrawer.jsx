import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import tapePlayer from './../../assets/img/tiny_player_jack_buttons.png';
import './NavDrawer.css';
import Login from './Login';
import { Link, withRouter } from 'react-router-dom';

const styles = {
  playerSideNav: {
    // backgroundImage: `url(${legalPad})`
  }
};

class NavDrawer extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open, path) => () => {
    console.log('toggleDrawer');
    this.setState({
      [side]: open,
    });
    path && this.props.history.push(path);
  };

  render() {
    const { classes } = this.props;

    return (
      <div id="NavDrawer">
        <Button onClick={this.toggleDrawer('top', true)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </Button>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div id="NavDrawer-player-wrap" style={{position:'relative'}} className={classes.playerSideNav}>
            <img src={tapePlayer} alt="tape player"/>
            <div id="click-home" role="button" onClick={this.toggleDrawer('top', false, '/')}></div>
            <div id="click-demo" role="button" onClick={this.toggleDrawer('top', false, '/portfolio')}></div>
            <div id="click-faq" role="button" onClick={this.toggleDrawer('top', false, '/faq')}></div>
            <div id="click-about" role="button" onClick={this.toggleDrawer('top', false, '/about')}></div>
            <div id="click-feedback" role="button" onClick={this.toggleDrawer('top', false, '/feedback')}></div>
            <div id="click-record" role="button" onClick={this.toggleDrawer('top', false, '/user')}>
              <Login appState={this.props.appState} />
            </div>
          </div>
          <div id="NavDrawer-profile-display">
            <Link to='/user'><p style={{fontFamily: 'monospace'}}>{this.props.appState.email}</p></Link>
            <Login appState={this.props.appState} isVisible="true"/>
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(NavDrawer));
