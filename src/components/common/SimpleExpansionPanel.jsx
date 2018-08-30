import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function SimpleExpansionPanel(props) {
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <h2>{props.header}</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>{props.body}</p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default SimpleExpansionPanel;
