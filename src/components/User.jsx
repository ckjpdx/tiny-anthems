import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection, allQuizzesCollection } from './../store';
import { Link } from 'react-router-dom';
import rider from './../assets/img/rider.gif';
import castle from './../assets/img/castleflag.gif';

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
    const currentWaitTime = allQuizzesCollection.docs.length * 4;

    const waitTimeMessage = <div>
      {currentWaitTime > 14
        ? "Tiny Anthems is excited to report that due to high demand, our wait time is longer than normal on the immortalization process. The current wait, we would guess, is... "
        : "Approx wait time: "}
        <br />
        <div style={{fontSize: 30}}>{currentWaitTime} days</div>
    </div>;

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
      listSongs = <p>You don't have any anthems made yet! Fill out a questionnaire to begin the immortalization process!</p>;
    }

    return (
      <div id="User">
        <div id="User-castle-area">
          <img src={castle} id="User-castle" alt="a castle" />
          <img src={rider} id="User-rider" alt="a hero on horseback" />
        </div>
        <h2>Welcome home, {this.props.appState.name}</h2>
        {waitTimeMessage}
        <button id="User-text-begin" onClick={this.handleClickImmortalize}>Begin Immortalization Process</button>
        <h2>Your questionnaires:</h2>
        <div className="User-list-area">
          {quizzes.length ? quizzes : <p>No questionnaires submitted yet!</p>}
        </div>
        <h2>Your anthems:</h2>
        <div className="User-list-area">
          {listSongs}
        </div>
      </div>
    );
  }
});

export default User;
