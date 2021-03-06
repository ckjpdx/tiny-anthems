import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection, allQuizzesCollection, settingsDoc } from './../store';
import { Link } from 'react-router-dom';
import rider from './../assets/img/rider.gif';
import castle from './../assets/img/castleflag.gif';
import ProgressVommy from './common/ProgressVommy';

import './User.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAudio, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const User = observer(class User extends Component {
  constructor(props){
    super(props);
    quizzesCollection.query = quizzesCollection.ref.where('uid', '==', this.props.appState.uid);
    allQuizzesCollection.query = allQuizzesCollection.ref.where('pending', '==', true);
  }

  handleClickImmortalize = () => {
    document.getElementById("User-rider").classList.add('play-rideremerges');
    setTimeout(() => {
      this.props.history.push('/user/quiz');
    }, 3000)};

  render() {
    const currentWaitTime = allQuizzesCollection.docs.length * settingsDoc.data.waitPerSong;

    // refactor? https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
    const quizzes = quizzesCollection.docs.map(quiz => <h2 key={quiz.id}><FontAwesomeIcon icon={faFileAlt} /> {quiz.data.quizData.answers && quiz.data.quizData.answers[0]} - {quiz.data.pending ? 'Pending' : 'Complete'}</h2>);
    let allUserSongs = [];
    let listSongs = [];

    quizzesCollection.docs.map(quiz => quiz.data.songs).forEach(songsArray => {
      songsArray && songsArray.forEach(song => allUserSongs.push(song));
    });
    if (allUserSongs.length) {
      listSongs = allUserSongs.map((song, i) =>
      <Link to='/user/song'>
        <h2 key={i} onClick={() => this.props.onSongSelect(song)}><FontAwesomeIcon icon={faFileAudio} /> {song}</h2>
      </Link>
      )
    } else {
      listSongs = <p>You don't have any anthems made yet!</p>;
    }

    return (
      <React.Fragment>
        {quizzesCollection.fetching ? <ProgressVommy/> :
        <div className="User">
          <div className="User-castle-area">
            <img src={castle} id="User-castle" alt="a castle" />
            <img src={rider} id="User-rider" alt="a hero on horseback" />
          </div>
          <h2>Welcome home, {this.props.appState.name}</h2>
          <p>Tiny Anthems is pretty dang excited to report that the current (approximate) wait time for the completion of the immortalization process is:<br/>
          {isNaN(currentWaitTime) ? <ProgressVommy/> :
            <span style={{fontSize: 40, fontFamily: 'Permanent Marker'}}>{currentWaitTime} days</span>}
          </p>
          <button id="User-text-begin" onClick={this.handleClickImmortalize}>Begin Immortalization Process</button>
          <h2>Your questionnaires:</h2>
          <div className="User-list-area">
            {quizzes.length ? quizzes : <p>No questionnaires submitted yet!</p>}
          </div>
          <h2>Your anthems:</h2>
          <div className="User-list-area">
            {listSongs}
          </div>
        </div>}
      </React.Fragment>
    );
  }
});

export default User;
