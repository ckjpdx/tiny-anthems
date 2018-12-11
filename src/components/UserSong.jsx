import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import fileDownload from 'js-file-download';
import TinyTape from './common/TinyTape';
import tapePlayer from '../assets/img/tiny_metal_player_front_closed.png';
import tapePlayerDoor from '../assets/img/tiny_metal_player_front_open_door.png';
import balloon from '../assets/img/balloon.gif';

import './UserSong.css';

const UserSong = observer(class UserSong extends Component {
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
    const song = this.props.songSelected;

    return (
      <div id="UserSong">
        <img src={balloon} id="UserSongBalloon" alt="a balloon" />
        <div id="UserSongPlayer">
          <img src={tapePlayer} />
          <img src={tapePlayerDoor} id="UserSongPlayerDoor"/>
          <div id="UserSongTape" onClick={() => this.downloadSong(song)} >
            <TinyTape />
            <h2 id="UserSongTapeTitle">{song}</h2>
            <p id="UserSongTapeInstructions">Click tape to download!!!</p>
          </div>
        </div>
      </div>
    );
  }
});

export default UserSong;
