import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './About.css';
import slug from './../assets/img/slug.png';

class About extends React.Component {
  render(){
    return (
      <div className="About">
        <img src={slug} alt="a slug, mike's spirit creature" id="slug"/>
        <div className="grid">
          <section>
            <h1>About the author</h1>
            <p>What is this, exactly?</p>
            <p>
              Some people like to party. Some people like to work on their trucks. Mike happens to enjoy assisting people in achieving immortality. Orienting himself toward the omega-point of enlightening and enlivening his community, Mike is fascinated by service, humor, music, and spirituality. Appointing himself with the humble yet vainglorious task of documenting and extolling the greatness of all 7.6 billion human residents of the planet one at a time, Mike has vowed to ensure that all beings are enshrined in the glory of song.
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
              You can reach Mike at TinyAnthems@gmail.com, or look into the blood moon from the peak of Dark Mountain and call my name thrice. Standard rates apply.
            </p>
          </section>
          <section>
            <h1>Justice</h1>
            <p>
              Tiny Anthems, in addition to creating everlasting sonic masterpieces that will ring for all of eternity, is about community-building and using the arts as a vehicle for social change. To this end, 25% of all donations and commissions for Anthems will be redirected to radical non-profits and enterprises that align with this mission.
            </p>
            <a href="http://www.friendsofnoise.org/" target="_blank" rel="noopener noreferrer">
              <img id="friendsofnoise" src="http://www.friendsofnoise.org/wp-content/uploads/2017/04/logolanding.png" alt="friends of noise" />
            </a>
            <p>
              Presently, Tiny Anthems is psyched to be contributing to Portland, OR’s <a href="http://www.friendsofnoise.org/" target="_blank" rel="noopener noreferrer">“Friends Of Noise”</a>, who work to empower youth via safe, all-ages concert opportunities and teaching a variety of workshops to empower young people to explore their artistic selves. Yes. It’s very cool.
            </p>
          </section>
        </div>

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
