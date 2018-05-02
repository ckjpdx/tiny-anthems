import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { v4 } from 'uuid';
import { quizzesCollection } from './../store';
import ListedQuizUpload from './ListedQuizUpload';
import './styles/ListedQuiz.css';

class ListedQuiz extends Component {
	static propTypes = {
		quiz: PropTypes.any
	};

	render() {
		const { quiz } = this.props;
    const { name, email, songName, title, url } = quiz.data;
    // console.log(name);
		return (
      <div className="ListedQuiz-div">
        <p>{name}</p>
        <p>{email}</p>
        <h3>{songName}</h3>
        <p>{url}</p>
        <ListedQuizUpload quiz={quiz} />
      </div>
		);
	}
}

export default observer(ListedQuiz);
