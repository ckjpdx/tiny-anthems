import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import fileDownload from 'js-file-download';

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
    let allUserSongs = [];
    let listSongs = [];
    quizzesCollection.docs.map(quiz => quiz.data.songs).map(songsArray => {
      songsArray && songsArray.forEach(song => allUserSongs.push(song));
    });
    if (allUserSongs.length) {
      listSongs = allUserSongs.map((song, i) =>
        <p key={i} onClick={() => this.downloadSong(song)}>{song}</p>
      )
    } else {
      listSongs = `You don't have any anthems made yet! Fill out a questionnaire to begin the immortalization process!`;
    }

    return (
      <div>
        <h1>{this.props.appState.name}'s Profile</h1>
        <Link to='/user/quiz'>
          <button>Start Questionnaire!</button>
        </Link>
        <h2>Your anthems:</h2>
        {listSongs}
      </div>
    );
  }
});

export default User;
