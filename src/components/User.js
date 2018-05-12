import React from 'react';
import SongList from './SongList';
import { Link } from 'react-router-dom';

function User(props){
  return (
    <div>
      <h1>Profile</h1>
      {props.uid}
      <Link to='/user/quiz'>
        <button>Take the Quiz!</button>
      </Link>
      <SongList />
    </div>
  );
}

export default User;
