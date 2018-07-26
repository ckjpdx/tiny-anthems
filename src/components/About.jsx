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
        <h1>About Mike</h1>
        <p>What is this, exactly?</p>
        <p>
          In the depths of winter, a bored and intrepid minstrel set about the noble (nay, heroic) task of writing vainglorious ballads of the people of the world. In an effort to make life more radical and to generally, you know, get pumped up, Tiny Anthems is the attempt to offer citizens of the world the chance to be immortalized; to be enshrined in the glory of song.
        </p>
        <p>Mike likes songs and is a proud member of the clean plate club.</p>
        <hr />
        <FontAwesomeIcon icon={faReact} size="6x"/>
        <p>Tiny Anthems, a React App</p>

          <p><a href="https://ckjpdx.github.io/portfolio/" target="_blank">by Chris Knight Johnson</a></p>

        <p>
          <a href="https://github.com/ckjpdx/tiny-anthems/blob/master/README.md" target="_blank">Tiny Anthems README</a>
        </p>
      </div>
    );
  }
}

export default About;
