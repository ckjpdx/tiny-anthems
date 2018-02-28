import React from 'react';
import SongList from './SongList';
import Questionnaire from './Questionnaire';
import { Switch, Route, Link } from 'react-router-dom';

function User(){
  return (
    <div>
      <h1>Hello, User!</h1>
      <Link to='/user/questionnaire'>
        <button>Take the Questionnaire!</button>
      </Link>
      <button>Write a review!</button>
      <SongList />
    </div>
  );
}

export default User;
