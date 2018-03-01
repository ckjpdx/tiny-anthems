import React from 'react';
import Song from './Song';

function SongList(){
  return (
    <div>
      <h2>Your Song List</h2>
      <Song />
      <Song />
      <Song />
    </div>
  );
}

export default SongList;
