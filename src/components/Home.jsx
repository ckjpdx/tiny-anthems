import React from 'react';
import TinyTape from './common/TinyTape';
import TinyPlayer from './../assets/img/tiny_player_jack_empty.png';
import TinyPlayerCover from './../assets/img/tiny_player_jack_cover.png';
import TinySharpie from './../assets/img/tiny_sharpie.png';
import Vommy from './../assets/img/mike.gif';
import './Home.css';

function Home(props){
  const handleTapeClick = () => {
    document.getElementById("Home-TinyTape").style.WebkitAnimationPlayState = "running";
    document.getElementById("Home-TinyPlayer").style.WebkitAnimationPlayState = "running";
    setTimeout(() => {
      props.history.push('/faq');
    }, 3000);
  }
  return (
    <div id="Home">
      <p className="all-non-mobile-view-text">CURRENTLY ONLY MOBILE VIEW HAS BEEN DEVELOPED. PLEASE USE DEV TOOLS OR SHRINK SCREEN HORIZONTALLY.</p>
      <div id="Home-TinyPlayer">
        <div id="Home-TinyTape" onClick={handleTapeClick} >
          <img src={TinySharpie} id="Home-TinySharpie"/>
          <TinyTape />
        </div>
        <img src={TinyPlayerCover} id="Home-TinyPlayer-cover"/>
        <img src={TinyPlayer} id="Home-TinyPlayer-empty"/>
      </div>
      <img src={Vommy} id="Home-Vommy"/>
    </div>
  );
}

export default Home;
