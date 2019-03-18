import React from 'react';
import { Link } from 'react-router-dom';
import Login from './common/Login';
import vommy from './../assets/img/mike.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './Home.css';

class Home extends React.Component {

  render() {
    const loggedIn = <div>
      <p><FontAwesomeIcon icon={faCheck} /> You're logged in!</p>
      <p>Proceed to the user area to start an application for immortality (an anthem) or to download completed anthems.</p>
      <Link to="/user">
        <button>Go to User Area</button>
      </Link>
    </div>;
    const loggedOut = <div>
      <p>To accept this great quest, one must step over the threshold.</p>
      <Link to="/user">
        <Login appState={this.props.appState} />
      </Link>
      <p>Or if you have questions concerning this process, <Link to="/faq">click here to see the FAQ section.</Link></p>
    </div>;

    return (
      <div className="Home">
        <img src={vommy} alt="cartoon of mike throwing up musical notes" id="About-vommy" />
        <h1 style={{fontStyle: 'italic'}}>“Strange&nbsp;Songs For&nbsp;Strange&nbsp;Humans”</h1>
        <p>If you’ve ever thought, “Gee, it would be neat if someone composed and recorded an overly-elaborate piece of music about me” you have arrived on the correct website. Here at Tiny Anthems, we’re in the business of distilling the ineffable nature of humans (or animals!) into sonic masterpieces. At last, you, too, can live forever. Be enshrined in the glory of song! Listen to a collection of <Link to="/portfolio">samples</Link> to hear some actual anthems recorded for a variety of strange humans.</p>
        {this.props.appState.uid ? loggedIn : loggedOut}
      </div>
    );
  }
}

export default Home;
