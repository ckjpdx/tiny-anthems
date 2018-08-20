import React from 'react';
import vommy from './../assets/img/mike.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './About.css';

class About extends React.Component {
  componentDidMount() {
    document.getElementById("About-vommy").classList.add('play-vommy-shrink');
  }

  render(){
    return (
      <div>
        <img src={vommy} alt="cartoon of mike throwing up musical notes" id="About-vommy" />
        <p id="About-vommy-label">Illustration of Mike's creative process</p>
        <h1>About the author</h1>
        <p>What is this, exactly?</p>
        <p>
          Mike is pretty confident that life can and should be pretty a pretty fun, cool, adventure, and not an endless stream of newsbites and woes to be stressed about. (though those are real, too) In an attempt to live this ideology and to be a small ripple in a large pond, Mike has taken on the herculean and vainglorious task of appointing himself the lowly bard of 2018. With intentions to make life at least briefly awesome for people, Mike’s plan is to write one song for all 7.6 billion residents of the planet.
        </p>
        <p>
          Mike attended The Evergreen State College and presently lives in a cramped apartment in Portland, OR.
        </p>
        <p>Mike likes songs and is a proud member of the clean plate club.</p>
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
