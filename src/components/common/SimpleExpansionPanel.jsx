import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './SimpleExpansionPanel.css';

const styles = {
  content: {
    display: 'block'
  }
};

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <ExpansionPanel className="SimpleExpansionPanel">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
        classes={{
          label: classes.content, // class name, e.g. `classes-nesting-label-x`
        }}
      >
        <h2 className="no-margin">{props.header}</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p>{props.body}</p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

SimpleExpansionPanel.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
