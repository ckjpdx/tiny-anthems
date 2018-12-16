/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import donation from '../assets/img/donation.jpg';
import './DialogThanks.css';

const styles = {

};

class DialogThanks extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <div className="DialogThanks-message">
        <img src={donation} alt="donation jar" />
        <p>
          Thank you for participating in what will likely be called “The greatest artistic endeavor of our time”. Below, I have included a few common payment methods that I am fond of. You may or may not be contacted with follow-up questions, and you will be alerted when your song is ready! Please contact me at TinyAnthems@gmail.com if you have any questions.
        </p>
        <p>
          Donations to my meager life may be made via <a href="https://www.paypal.me/Tinyanthems" target="_blank">Paypal</a>
        </p>
        <p>
          Or via Venmo @Tinyanthems
        </p>
      </div>
        <Button onClick={this.handleClose}>OKAY</Button>
      </Dialog>
    );
  }
}

DialogThanks.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(DialogThanks);
