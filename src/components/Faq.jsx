import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import SimpleExpansionPanel from './common/SimpleExpansionPanel';
import { faqArr } from './../assets/extras/faqArr';

import './Faq.css';

function Faq(){
  let faqList = [];
  for (let i = 0; i < faqArr.length; i += 2) {
    faqList.push(<SimpleExpansionPanel header={faqArr[i]} body={faqArr[i+1]} />);
  }
  return (
    <div className="Faq">
      <h2 style={{fontStyle: 'italic'}}>“Be Enshrined in the Glory of Song”</h2>
      <h3>Since the dawn of symbolic thinking, humans of have been telling stories, creating myths, and building legends to guide one another. Here at Tiny Anthems, we believe all humans are worthy of touching immortality. For like, a few bucks or whatever you’ve got lying around, you or a loved one can live forever. Be enshrined in the glory of song.</h3>
      <h3>To accept this great quest, one must step over the threshold.</h3>
      <Link to="/user">
        <button>Login to Begin</button>
      </Link>
      <hr />
      <h1><FontAwesomeIcon icon={faInfoCircle} /> FAQ</h1>
      {faqList}
    </div>
  );
}

export default Faq;
