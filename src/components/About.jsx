import React from 'react';
import vommy from './../assets/img/mike.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './About.css';

class About extends React.Component {
  render(){
    return (
      <div>
        <img src={vommy} alt="cartoon of mike throwing up musical notes" id="About-vommy" />
        <h1>About the author</h1>
        <p>What is this, exactly?</p>
        <p>
          Some people like to party. Some people like to work on their trucks. Mike likes to remind people of how weird it is to be alive. He just so happens to want to do this in the form of song in such a way that reminds people of their own present greatness. Appointing himself with the humble yet vainglorious task of documenting and extolling the greatness of all 7.6 billion human residents of the planet one at a time, Mike has vowed to ensure that all beings are enshrined in the glory of song.
        </p>
        <p>
          Mike attended The Evergreen State College and presently lives in a cramped apartment in Portland, OR.
        </p>
        <p>
          Mike likes songs and is a proud member of the clean plate club.
        </p>
        <h2>
          Other Questions? Contact Me!
        </h2>
        <p>
          You can reach Mike at TinyAnthems@gmail.com, or look into the blood moon from the peak of Dark Mountain and call my name thrice.
        </p>
        <hr />
        <FontAwesomeIcon icon={faReact} size="6x" id="About-react"/>
        <p>Tiny Anthems, a React App</p>

          <p><a href="https://ckjpdx.github.io/portfolio/" target="_blank" rel="noopener noreferrer">by Chris Knight Johnson</a></p>

        <p>
          <a href="https://github.com/ckjpdx/tiny-anthems/blob/master/README.md" target="_blank" rel="noopener noreferrer">Tiny Anthems README</a>
        </p>
      </div>
    );
  }
}

export default About;
