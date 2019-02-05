import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ListedQuizUpload from './ListedQuizUpload';
import './ListedQuiz.css';
import firebase from 'firebase';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

	render() {
		const { quiz } = this.props;
		const quizData = quiz.data.quizData;
		const questionsAndAnswers = quizData
			? quizData.questions.map((question, i) => <div className="ListedQuiz-question-answer-pair" key={i}><h3>{question}</h3><p>{quizData.answers[i]}</p></div>)
			: <h3>WARNING: No data detected!</h3>;

		return (
			<ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<div className="ListedQuiz-pending-complete">
						<h3>{quiz.data.name} • {quiz.data.email}</h3>
						<input type="checkbox" checked={quiz.data.pending} onChange={() => this.changePending(quiz)}/>
						<p>Pending</p>
					</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display: 'block'}}>
					<div className="ListedQuiz">
						{questionsAndAnswers}
						<h2>Song(s)</h2>
						{quiz.data.songs && quiz.data.songs.map((song, i) => {
							return <p key={i}>{song} <span key={'x'+i} onClick={() => this.deleteSong(song, quiz)}>X</span></p>
						})}
						<ListedQuizUpload quiz={quiz} />
					</div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
		);
	}
}

export default observer(ListedQuiz);
