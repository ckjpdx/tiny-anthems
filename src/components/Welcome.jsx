import React from 'react';
import TinyTape from './common/TinyTape';
import tinyPlayer from './../assets/img/tiny_player_jack_empty.png';
import tinyPlayerCover from './../assets/img/tiny_player_jack_cover.png';
import tinySharpie from './../assets/img/tiny_sharpie.png';
import vommy from './../assets/img/mike.gif';
import ghost from './../assets/img/ghost.png';
import tinyTheme from './../assets/tiny-theme.mp3';
import './Welcome.css';

function Welcome(props){
  const handleTapeClick = () => {
    new Audio(tinyTheme).play();
    document.getElementById("Welcome-TinyTape-wrap").classList.add('play-tape-insert');
    document.getElementById("Welcome-TinyPlayer").classList.add('play-player-fly-away');
    setTimeout(() => {
      props.history.push('/home');
    }, 3000);
  }
  return (
    <div id="Welcome">
      <img src={ghost} alt="a ghost" id="Welcome-ghost"/>
      <div id="Welcome-TinyPlayer">
        <div id="Welcome-TinyTape-wrap" onClick={handleTapeClick} >
          <img alt="tiny anthems" src={tinySharpie} id="Welcome-TinySharpie"/>
          <p id="Welcome-tape-clickme">Click Me!</p>
          <TinyTape />
        </div>
        <img src={tinyPlayerCover} id="Welcome-TinyPlayer-cover" alt="tape player cover"/>
        <img src={tinyPlayer} alt="tape player"/>
      </div>
      <img src={vommy} id="Welcome-Vommy" alt="vommy the mascott"/>
    </div>
  );
}

export default Welcome;
