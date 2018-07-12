import React from 'react';
import TinyTape from './common/TinyTape';
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
      <TinyTape onClick={handleTapeClick} />
    </div>
  );
}

export default Welcome;
