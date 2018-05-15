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
					console.log(quiz.data.songs);
					const newSongs = quiz.data.songs.filter(each => each !== song);
					quiz.update({songs: newSongs});
					console.log(newSongs);
			})
			.catch(err => console.error(song, quiz));
	}
	test(song, quiz){
		const storage = firebase.storage();
		const gsReference = storage.refFromURL('gs://tiny-anthems-2043a.appspot.com/songs/' + song);
		// gsReference.delete()
			// .then(() => {
					console.log(quiz.data.songs);
					const newSongs = quiz.data.songs.filter(each => {
						console.log(each, song);
						return each !== song
					});
					// quiz.update({songs: newSongs});
					console.log(newSongs);
			// })
			// .catch(err => console.error(song, quiz));
	}

	render() {
		const { quiz } = this.props;
    // console.log(name);
		return (
      <div className="ListedQuiz-div">
        <p>{quiz.data.name} -- {quiz.data.email}</p>
				{quiz.data.songs && quiz.data.songs.map((song, i) => {
          return <p key={i}>{song} <span key={'x'+i} onClick={() => this.deleteSong(song, quiz)}>X</span><span key={'t'+i} onClick={() => this.test(song, quiz)}>T</span></p>
        })}
        <ListedQuizUpload quiz={quiz} />
      </div>
		);
	}
}

export default observer(ListedQuiz);
