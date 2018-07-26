import React from 'react';
import TinyTape from './common/TinyTape';
import tinyPlayer from './../assets/img/tiny_player_jack_empty.png';
import tinyPlayerCover from './../assets/img/tiny_player_jack_cover.png';
import tinySharpie from './../assets/img/tiny_sharpie.png';
import vommy from './../assets/img/mike.gif';
import ghost from './../assets/img/ghost.png';
import './Home.css';

function Home(props){
  const handleTapeClick = () => {
    document.getElementById("Home-TinyTape-wrap").classList.add('play-tape-insert');
    document.getElementById("Home-TinyPlayer").classList.add('play-player-fly-away');
    setTimeout(() => {
      props.history.push('/faq');
    }, 3000);
  }
  return (
    <div id="Home">
      <img src={ghost} alt="a ghost" id="Home-ghost"/>
      <div id="Home-TinyPlayer">
        <div id="Home-TinyTape-wrap" onClick={handleTapeClick} >
          <img src={tinySharpie} id="Home-TinySharpie"/>
          <p id="Home-tape-clickme">Click Me!</p>
          <TinyTape />
        </div>
        <img src={tinyPlayerCover} id="Home-TinyPlayer-cover"/>
        <img src={tinyPlayer} />
      </div>
      <img src={vommy} id="Home-Vommy"/>
    </div>
  );
}

export default Home;
