import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import playerSide from './../../assets/img/tiny_metal_player_side_both.png';
import './../styles/NavDrawer.css';

const styles = {

};

class NavDrawer extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const navPlayer = (
      <div style={{position:'relative'}}>
        <img src={playerSide}/>
        <div id="click-faq"></div>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('top', true)}>NAV</Button>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
          </div>
          {navPlayer}
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);
