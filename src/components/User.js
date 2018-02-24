import React from 'react';
import SongList from './SongList';

function User(){
  return (
    <div>
      <h1>Hello, User!</h1>
      <button>Take the Questionnaire!</button>
      <button>Write a review!</button>
      <SongList />
    </div>
  );
}

export default User;
