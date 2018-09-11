import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import SimpleExpansionPanel from './common/SimpleExpansionPanel';
import { faqArr } from './../assets/extras/faqArr';
import lighthouse from './../assets/img/lighthouse.png';

import './Faq.css';

function Faq(){
  let faqList = [];
  for (let i = 0; i < faqArr.length; i += 2) {
    faqList.push(<SimpleExpansionPanel header={faqArr[i]} body={faqArr[i+1]} />);
  }
  return (
    <div id="Faq">
      <div className="Faq-lighthouse">
        <img src={lighthouse} alt="a lighthouse" />
      </div>
      <h1><FontAwesomeIcon icon={faInfoCircle} /> FAQ</h1>
      {faqList}
    </div>
  );
}

export default Faq;
