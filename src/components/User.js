import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import { Link } from 'react-router-dom';


const User = observer(class User extends Component {
  // constructor(props) {
  //   super(props);
  //   quizzesCollection.query = quizzesCollection.ref.where('uid', '==', `${this.props.appState.uid}`);
  // }

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
    // quiz => {
    //   quiz.data.songs.map(song => {
    //     <p key={song.id}>{song}</p>
    //   });
    // });

    // const songsMapped = quizzesCollection.docs.map(quiz => {
    //   quiz //.data.songs.map(song => <p>{song}</p>);
    // });
    return (
      <div>
        <h1>Profile</h1>
        {this.props.appState.email}
        <Link to='/user/quiz'>
          <button>Take the Quiz!</button>
        </Link>
        <h2>Your Songs:</h2>
        {displaySongs.map((song, i) => <p key={i}>{song}</p>)}
      </div>
    );
  }
});

export default User;

// quizzesCollection.docs[0].data.name

// quiz.songs['song1', 'song2'];
