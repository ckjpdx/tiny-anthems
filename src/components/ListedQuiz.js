import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { v4 } from 'uuid';
import { quizzesCollection } from './../store';
import ListedQuizUpload from './ListedQuizUpload';
import './styles/ListedQuiz.css';
import firebase from 'firebase';

class ListedQuiz extends Component {
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

	render() {
		const { quiz } = this.props;
		return (
      <div className="ListedQuiz-div">
        <p>{quiz.data.name} -- {quiz.data.email}</p>
				{quiz.data.songs && quiz.data.songs.map((song, i) => {
          return <p key={i}>{song} <span key={'x'+i} onClick={() => this.deleteSong(song, quiz)}>X</span></p>
        })}
        <ListedQuizUpload quiz={quiz} />
      </div>
		);
	}
}

export default observer(ListedQuiz);
