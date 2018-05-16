import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { v4 } from 'uuid';
import { quizzesCollection } from './../store';
import ListedQuizUpload from './ListedQuizUpload';
import './styles/ListedQuiz.css';
import firebase from 'firebase';

class ListedQuiz extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.changePending = this.changePending.bind(this);
	}

	static propTypes = {
		quiz: PropTypes.any
	};

	deleteSong(song, quiz){
		const storage = firebase.storage();
		const gsReference = storage.refFromURL('gs://tiny-anthems-2043a.appspot.com/songs/' + song);
		gsReference.delete()
			.then(() => {
					const oldSongs = quiz.data.songs.slice();
					const newSongs = oldSongs.filter(each => {
						return each !== song
					});
					quiz.update({songs: newSongs});
			})
			.catch(err => console.error(song, quiz));
	}

	async changePending(quiz) {
		const newPending = !quiz.data.pending;
		await quiz.update({pending: newPending});
	}

	// switchPendingQuery() {
	// 	this.state.filterPending ? (
	// 		quizzesCollection.query = quizzesCollection.ref.where('pending', '==', true)
	// 	):(
	// 		quizzesCollection.query = undefined
	// 	)
	// }

	render() {
		const { quiz } = this.props;
		const quizQuestionsArrays = quiz.data.questions ? Object.entries(quiz.data.questions) : [['no questions', 'no answers']];

		return (
      <div className="ListedQuiz">
				<div className="ListedQuiz-pending-complete">
					<p>{quiz.data.email}</p>
					<input type="checkbox" checked={quiz.data.pending} onChange={() => this.changePending(quiz)}/>
					<p>Pending</p>
				</div>
				{quizQuestionsArrays.map((questionArray, i) => <div key={i}><h3>{questionArray[0]}?</h3><p>{questionArray[1]}</p></div>)}
				<h2>Song(s)</h2>
				{quiz.data.songs && quiz.data.songs.map((song, i) => {
          return <p key={i}>{song} <span key={'x'+i} onClick={() => this.deleteSong(song, quiz)}>X</span></p>
        })}
        <ListedQuizUpload quiz={quiz} />
      </div>
		);
	}
}

export default observer(ListedQuiz);
