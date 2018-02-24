import React from 'react';
import Song from './Song';

function SongList(){
  return (
    <div>
      <h2>Your Song List</h2>
      <ul>
        <li><Song /></li>
        <li><Song /></li>
        <li><Song /></li>
      </ul>
    </div>
  );
}

export default SongList;
