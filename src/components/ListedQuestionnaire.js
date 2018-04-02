import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { v4 } from 'uuid';
import { quizzesCollection } from './../store';
import './styles/ListedQuestionnaire.css';

class ListedQuestionnaire extends Component {
	static propTypes = {
		quiz: PropTypes.any
	};

  onUpload = async () => {
    const { quiz } = this.props;
    const quizId = quiz.id;
    // const title = null;
    // const url = null;
    const uploadInfo = {
      title: "title",
      songUrl: "url"
    };
    await quiz.update({
      title: "title test",
      songUrl: "song url test"
    });
  };

	render() {
    let title = null;
    let url = null;
		const { quiz } = this.props;

		return (
      <div className="ListedQuestionnaire-div">
        <h3>{this.props.quiz.name}</h3>
        <div>
          <label>Title:</label>
          <input ref={(input) => {title = input;}} />
          <label>URL:</label>
          <input ref={(input) => {url = input;}} />
          <p className="admin-upload-label">UPLOAD SONG--></p>
          <button onClick={this.onUpload}>Upload Song</button>
        </div>
        <p>{this.props.quiz.dob}</p>
        <p>{this.props.quiz.anythingElse}</p>
      </div>
		);
	}
}

export default observer(ListedQuestionnaire);
