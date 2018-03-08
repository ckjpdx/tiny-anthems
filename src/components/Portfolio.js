import React from 'react';
import './styles/Portfolio.css';

function Portfolio(){
  return (
    <div>
      <h1>Portfolio</h1>
      <h2>Song Samples</h2>
      <iframe className="sample-song" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/410666169&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe className="sample-song" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/410666160&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe className="sample-song" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/410666157&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <h2>Poems</h2>
      <h3>Once Upon a Cat</h3>
      <p>I once kneweth a gib from kentucky. T hath used to cheweth bird heads and giveth chaseth to the mice, lov'rs of cheese</p>
      <h3>Rise up, rats, and seize the cheese!</h3>
      <p>Thee can fooleth all the people some of the timeth, and some of the people all the timeth, but thee cannot fooleth all the people all the timeth</p>
      <h3>Sit down dude, you're lording</h3>
      <p>I requesteth yond thee sitteth, valorous sire, so yond we may speaketh in the mud as equals</p>
    </div>
  );
}

export default Portfolio;
