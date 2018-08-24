import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import fileDownload from 'js-file-download';
import rider from './../assets/img/rider.png';
import './User.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAudio, faFileAlt } from '@fortawesome/free-solid-svg-icons';
// import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'

const User = observer(class User extends Component {
  constructor(props){
    super(props);
    quizzesCollection.query = quizzesCollection.ref.where('uid', '==', this.props.appState.uid);
  }

  downloadSong(song){
    const storage = firebase.storage();
    const gsReference = storage.refFromURL('gs://tiny-anthems-2043a.appspot.com/songs/' + song);
    gsReference.getDownloadURL().then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
        fileDownload(blob, song);
      };
      xhr.open('GET', url);
      xhr.send();
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    // refactor? https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
    const quizzes = quizzesCollection.docs.map(quiz => <h2 key={quiz.id}><FontAwesomeIcon icon={faFileAlt} /> {quiz.data.questions.nameOrNickname} - {quiz.data.pending ? 'Pending' : 'Complete'}</h2>);
    let allUserSongs = [];
    let listSongs = [];

    quizzesCollection.docs.map(quiz => quiz.data.songs).map(songsArray => {
      songsArray && songsArray.forEach(song => allUserSongs.push(song));
    });
    if (allUserSongs.length) {
      listSongs = allUserSongs.map((song, i) =>
        <h2 key={i} onClick={() => this.downloadSong(song)}><FontAwesomeIcon icon={faFileAudio} /> {song}</h2>
      )
    } else {
      listSongs = <p>You don't have any anthems made yet! Fill out a questionnaire to begin the immortalization process!</p>;
    }
    // apply styles to text
    const beginText = document.getElementById('User-text-begin');
    const riderHero = document.getElementById('User-rider');
    function toggleBegin(){
      beginText.classList.toggle('User-toggle-begin-text')
      riderHero.classList.toggle('User-toggle-rider-hero')
    }
    return (
      <div>
        <h2>Welcome home, {this.props.appState.name}</h2>
        <Link to='/user/quiz' id="User-being-link" onMouseOver={toggleBegin.bind(this)} onMouseOut={()=>toggleBegin()}>
          <img src={rider} id="User-rider" alt="a hero on a horse" />
          <p id="User-text-begin">Begin Immortalization Process</p>
        </Link>
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
