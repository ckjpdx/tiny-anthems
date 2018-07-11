import React from 'react';
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
      <a className="Welcome-readme-link" href="https://github.com/ckjpdx/tiny-anthems/blob/master/README.md" target="_blank">README</a>
      <p className="all-non-mobile-view-text">CURRENTLY ONLY MOBILE VIEW HAS BEEN DEVELOPED. PLEASE USE DEV TOOLS OR SHRINK SCREEN HORIZONTALLY.</p>
      <img src={tinyTape} alt="tiny anthems casette tape" className="Welcome-tape" onClick={handleTapeClick}></img>
    </div>
  );
}

export default Welcome;
