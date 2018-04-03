import React from 'react';
import SongList from './SongList';
import { Link } from 'react-router-dom';

function User(props){
  return (
    <div>
      <h1>Hello, {props.userAccount.name}!</h1>
      <Link to='/user/Quiz'>
        <button>Take the Quiz!</button>
      </Link>
      <SongList />
    </div>
  );
}

export default User;
