import React from 'react';
import { Link } from 'react-router-dom';
import catterpillar from './../assets/img/catterpillar.gif';
import cacoon from './../assets/img/cacoon.png';
import butterfly from './../assets/img/butterfly.png';
import Login from './common/Login';

import './Home.css';

class Home extends React.Component {

  render() {
    console.log(this.props);
    const loggedIn = <div>
      <p>You're logged in!</p>
      <p>Proceed to the user area to start an application for immortality or to download completed anthems.</p>
      <Link to="/user">
        <button>Go to User Area</button>
      </Link>
    </div>;
    const loggedOut = <div>
      <p>To accept this great quest, one must step over the threshold.</p>
      <Link to="/user">
      <Login appState={this.props.appState} isVisible="true" />
      </Link>
      <p>Or if you have questions concerning this process, <Link to="/faq">click here to see the FAQ section.</Link></p>
    </div>;

    return (
      <div className="Home">
        <div className="Home-metamorphosis">
          <img src={cacoon} id="cacoon" />
          <img src={catterpillar} id="catterpillar" />
          <img src={butterfly} id="butterfly" />
        </div>
        <h2 style={{fontStyle: 'italic'}}>“Strange Songs For Strange Humans”</h2>
        <h3>If you’ve ever thought, “Gee, it would be neat if someone composed and recorded an overly-elaborate piece of music about me” you have arrived on the correct website. Here at Tiny Anthems, we’re in the business of distilling the ineffable nature of humans into sonic masterpieces. At last, you, too, can live forever. Be enshrined in the glory of song.</h3>
        {this.props.appState.uid ? loggedIn : loggedOut}
      </div>
    );
  }
}

export default Home;
