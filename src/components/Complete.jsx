import React from 'react';
import vommy from './../assets/img/mike.gif';
import ghost from './../assets/img/ghost.png';
import { Link, withRouter } from 'react-router-dom';
import './Complete.css';

function Complete(props){
  return (
    <div id="Complete">
      <img src={ghost} alt="a ghost" id="Complete-ghost"/>
      <h2>Congratulations!</h2>
      <p>
        Thank you for participating in what will likely be called “The greatest artistic endeavor of our time." Below, I have included a few common payment methods that I am fond of. You may or may not be contacted with follow-up questions, and you will be alerted when your song is ready! Please contact me at TinyAnthems@gmail.com if you have any questions.
      </p>
      <p>
        No further action is required! You may close this window now or return to the site.
      </p>
      <Link to='/home'>
        <button>Home</button>
      </Link><br/>
      <img src={vommy} id="Complete-Vommy" alt="vommy the mascott"/>
    </div>
  );
}

export default Complete;
