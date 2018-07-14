import React from 'react';
import mike from './../assets/img/mike.gif';
import './About.css';

class About extends React.Component {
  componentDidMount() {
    document.getElementById("About-mike").style.width = "30%";
  }

  render(){
    return (
      <div>
        <img src={mike} alt="cartoon of mike throwing up musical notes" id="About-mike" />
        <p id="About-mike-label">Illustration of Mike's creative process</p>
        <h1>About Mike</h1>
        <h2>Intrepid Minstrel</h2>
        <p>What is this, exactly?</p>
        <p>
          In the depths of winter, a bored and intrepid minstrel set about the noble (nay, heroic) task of writing vainglorious ballads of the people of the world. In an effort to make life more radical and to generally, you know, get pumped up, Tiny Anthems is the attempt to offer citizens of the world the chance to be immortalized; to be enshrined in the glory of song.
        </p>
        <p>Mike likes songs and is a proud member of the clean plate club.</p>
        <h1>About Chris</h1>
        <h2>Web Developer Extraordinaire</h2>
        <p>
          In MAY 2018, Chris started making this ReactJS website for his friend Mike, the featured minstrel. Chris is currently seeking employment. If you are curious about this project, check out the <a className="About-readme-link" href="https://github.com/ckjpdx/tiny-anthems/blob/master/README.md" target="_blank">README</a>. Or some of Chris' other projects in his <a className="About-readme-link" href="https://ckjpdx.github.io/portfolio/" target="_blank">PORTFOLIO</a>.
        </p>
      </div>
    );
  }
}

export default About;
