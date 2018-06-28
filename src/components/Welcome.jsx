import React from 'react';
import playerOpen from './../assets/img/tiny_metal_player_front_open.png';
import tinyTape from './../assets/img/tiny_tape_small.png';
import './styles/Welcome.css';

function Welcome(){
  const handleTapeClick = () => {
    setTimeout(() => {
      document.getElementsByClassName("welcome-tape")[0].style.WebkitAnimationPlayState = "running";
    }, 1000);
  }
  return (
    <div>
      <img src={tinyTape} alt="tiny anthems casette tape" className="welcome-tape" onClick={handleTapeClick}></img>
      <img src={playerOpen} alt="open tape player" className="welcome-player-open"></img>
    </div>
  );
}

export default Welcome;
