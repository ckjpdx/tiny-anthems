import React from 'react';
import SongList from './SongList';
import { Link } from 'react-router-dom';

function User(props){
  return (
    <div>
      <h1>Hello, {props.userAccount.name}!</h1>
      <Link to='/user/questionnaire'>
        <button>Take the Questionnaire!</button>
      </Link>
      <SongList />
    </div>
  );
}

export default User;
