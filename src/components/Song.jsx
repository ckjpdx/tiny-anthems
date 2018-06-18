import React from 'react';
import { Link } from 'react-router-dom';

function Song(){
  return (
    <div>
      <h3>Song Title</h3>
      <p>Download Link</p>
      <Link to='/user/review'>
        <button>Write a review!</button>
      </Link>
    </div>
  );
}

export default Song;
