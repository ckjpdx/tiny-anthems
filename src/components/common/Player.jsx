import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withCustomAudio } from 'react-soundplayer/addons';
import { PlayButton, Progress, VolumeControl, Timer } from 'react-soundplayer/components';
import './Player.css';

class SoundPlayer extends Component {
  render() {
    const { trackTitle } = this.props;

    return (
      <div className="Player">
        <h3>{trackTitle}</h3>
        <div className="Player-controls">
          <PlayButton {...this.props} className="btn"/>
          <Timer {...this.props} />
          <Progress {...this.props} />
        </div>
      </div>
    );
  }
}

SoundPlayer.propTypes = {
  preloadType: PropTypes.string,
  streamUrl: PropTypes.string.isRequired,
  trackTitle: PropTypes.string.isRequired
};

SoundPlayer.defaultProps = {
  preloadType: 'auto'
};

export default withCustomAudio(SoundPlayer);
