import React from 'react';
import { Link } from 'react-router-dom';
import catterpillar from './../assets/img/catterpillar.gif';
import cacoon from './../assets/img/cacoon.png';
import butterfly from './../assets/img/butterfly.png';

import './Home.css';

function Home(){
  return (
    <div className="Home">
      <div className="Home-metamorphosis">
        <img src={cacoon} id="cacoon" />
        <img src={catterpillar} id="catterpillar" />
        <img src={butterfly} id="butterfly" />
      </div>
      <h2 style={{fontStyle: 'italic'}}>“Be Enshrined in the Glory of Song”</h2>
      <h3>Since the dawn of symbolic thinking, humans of have been telling stories, creating myths, and building legends to guide one another. Here at Tiny Anthems, we believe all humans are worthy of touching immortality. For like, a few bucks or whatever you’ve got lying around, you or a loved one can live forever. Be enshrined in the glory of song.</h3>
      <h3>To accept this great quest, one must step over the threshold.</h3>
      <Link to="/user">
        <button>Login to Begin</button>
      </Link>
    </div>
  );
}

export default Home;
