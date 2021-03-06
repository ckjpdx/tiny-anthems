import React, { useState } from 'react';
import catterpillar from './../assets/img/catterpillar.gif';
import cacoon from './../assets/img/cacoon.png';
import butterfly from './../assets/img/butterfly.png';
import PortfolioWorks from './PortfolioWorks';
import PortfolioSamples from './PortfolioSamples';

import './Portfolio.css';

function Portfolio(){
  const [page, setPage] = useState(null);

  return (
    <div>
      <div id="metamorphosis">
        <img src={cacoon} id="cacoon" alt="cacoon"/>
        <img src={catterpillar} id="catterpillar" alt="catterpillar"/>
        <img src={butterfly} id="butterfly" alt="butterfly"/>
      </div>
      <button onClick={() => setPage('works')}>Works</button>
      <button onClick={() => setPage('samples')}>Samples</button>
      {page === null && <p>Check out my stuff! See "Works" for complete songs, or "Samples" for song snippets.</p>}
      {page === 'works' && <PortfolioWorks/>}
      {page === 'samples' && <PortfolioSamples/>}
    </div>
  );
}

export default Portfolio;
