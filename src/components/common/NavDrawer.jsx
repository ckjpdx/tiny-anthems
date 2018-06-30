import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import playerSide from './../../assets/img/tiny_metal_player_side_both.png';
import legalPad from './../../assets/img/legal-pad.jpg';
import './../styles/NavDrawer.css';
import { withRouter } from 'react-router-dom';
import Login from './Login';

const styles = {
  playerSideNav: {
    backgroundImage: `url(${legalPad})`,
    background: 'red'
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
    path && this.props.history.push('/' + path);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="NavDrawer">
        <Button onClick={this.toggleDrawer('top', true)}>TELEPORTER</Button>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div style={{position:'relative'}} className={classes.playerSideNav}>
            <img src={playerSide}/>
            <div id="click-other" role="button" onClick={this.toggleDrawer('top', false, 'portfolio')}></div>
            <div id="click-faq" role="button" onClick={this.toggleDrawer('top', false, 'faq')}></div>
            <div id="click-about" role="button" onClick={this.toggleDrawer('top', false, 'about')}></div>
            <div id="click-feedback" role="button" onClick={this.toggleDrawer('top', false, 'feedback')}></div>
            <div id="click-begin" role="button" onClick={this.toggleDrawer('top', false, 'user')}>
              <Login appState={this.props.appState} />
            </div>
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
