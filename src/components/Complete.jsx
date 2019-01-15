import React from 'react';
import vommy from './../assets/img/mike.gif';
import ghost from './../assets/img/ghost.png';
import { Link } from 'react-router-dom';
import './Complete.css';

function Complete(props){
  return (
    <div id="Complete">
      <img src={ghost} alt="a ghost" id="Complete-ghost"/>
      <h2>Congratulations!</h2>
      <p>
        Thank you for participating in what will likely be called “The greatest artistic endeavor of our time”. Once I am notified of your submission, I’ll contact you with any additional questions I might have or just to say hello. For follow up questions, or if you’re just bored, please contact me at TinyAnthems@gmail.com.
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
