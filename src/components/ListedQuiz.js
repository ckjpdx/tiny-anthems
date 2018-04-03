import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { v4 } from 'uuid';
import { quizzesCollection } from './../store';
import './styles/ListedQuiz.css';

class ListedQuiz extends Component {
	static propTypes = {
		quiz: PropTypes.any
	};

  onUploadSong = async () => {
    const { quiz } = this.props;
    const quizId = quiz.id;
    // const newTitle = null;
    // const url = null;

    await quiz.update({
      title: "title test",
      songUrl: "song url test"
    });
  };

	render() {
    let newTitle = null;
    let newUrl = null;
		const { quiz } = this.props;
    const { name, songName, title, url } = quiz.data;
    console.log(name);
		return (
      <div className="ListedQuiz-div">
        <h3>{songName}</h3>
        <p>For {name}</p>
        <p>{url}</p>
        <div>
          <label>Title:</label>
          <input ref={(input) => {newTitle = input;}} />
          <label>URL:</label>
          <input ref={(input) => {newUrl = input;}} />
          <p className="admin-upload-label">UPLOAD SONG--></p>
          <button onClick={this.onUploadSong}>Upload Song</button>
        </div>
      </div>
		);
	}
}

export default observer(ListedQuiz);
