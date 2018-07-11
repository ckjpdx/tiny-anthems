import React from 'react';
import playerOpen from './../assets/img/tiny_metal_player_front_open.png';
import tinyTape from './../assets/img/tiny_tape_small.png';
import './styles/Welcome.css';

function Welcome(props){
  const handleTapeClick = () => {
    document.getElementsByClassName("Welcome-tape")[0].style.WebkitAnimationPlayState = "running";
    setTimeout(() => {
      props.history.push('/faq');
    }, 1000);
  }
  return (
    <div>
      <p className="all-non-mobile-view-text">CURRENTLY ONLY MOBILE VIEW HAS BEEN DEVELOPED. PLEASE USE DEV TOOLS OR SHRINK SCREEN HORIZONTALLY.</p>
      <img src={tinyTape} alt="tiny anthems casette tape" className="Welcome-tape" onClick={handleTapeClick}></img>
      <p className="Welcome-tagline">...songs about you!</p>
      <img src={playerOpen} alt="open tape player" className="Welcome-player-open"></img>
    </div>
  );
}

export default Welcome;
