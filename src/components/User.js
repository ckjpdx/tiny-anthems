import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import fileDownload from 'js-file-download';

const User = observer(class User extends Component {

  downloadSong(songFileName){
    const song = songFileName;
    console.log(song);
    const storage = firebase.storage();
    // const storageRef = storage.ref();
    const gsReference = storage.refFromURL('gs://tiny-anthems-2043a.appspot.com/songs/' + song);
    gsReference.getDownloadURL().then((url) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        var blob = xhr.response;
        console.log(event, blob, song);
        fileDownload(blob, song);
      };
      xhr.open('GET', url);
      xhr.send();
      console.log(xhr);
    }).catch(function(error) {
      console.error(error);
    });
  }

  render() {
    console.log(quizzesCollection.docs.map(doc => doc), quizzesCollection.docs.map(doc => doc.data.name));

    const quizzesDocArr = quizzesCollection.docs.map(doc => doc);
    // let allSongs = [];
    const arrayOfSongsArrays = quizzesCollection.docs.map(quiz => quiz.data.songs);
    // [undefined, ObservableArray]
    let displaySongs = [];
    arrayOfSongsArrays.map(songArray => {
      return songArray && songArray.forEach(song => displaySongs.push(song));
    });
    console.log(displaySongs);

    return (
      <div>
        <h1>Profile</h1>
        {this.props.appState.email}
        <Link to='/user/quiz'>
          <button>Take the Quiz!</button>
        </Link>
        <h2>Your Songs:</h2>
        {displaySongs.map((song, i) => {
          const storage = firebase.storage();
          const pathReference = storage.ref(`songs/${song}`);
          return <p key={i} onClick={() => this.downloadSong(song)}>{song}</p>
        })}
      </div>
    );
  }
});

export default User;
