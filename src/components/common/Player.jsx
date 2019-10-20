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
        <p className="Player-track-title">{trackTitle}</p>
        <div className="Player-controls">
          <PlayButton {...this.props} className="btn"/>
          <Timer {...this.props} />
        </div>
        <Progress {...this.props} />
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
