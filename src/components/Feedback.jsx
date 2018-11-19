import React from 'react';
import robot from './../assets/img/robot.gif';
import './Feedback.css';

function Feedback(){
  return (
    <div id="Feedback">
      <img src={robot} className="robot-mobile"/>
      <h1>Voices of the Immortal</h1>
      <div className="Feedback-comment">
        <div className="Feedback-robot">
          <img src={robot} />
        </div>
        <p>
          “We asked Mike to write a story about our humble city magazine. He delivered—and then some. The final song brought raucous laughter and joy to our editorial staff. We’re officially adopting it as the magazine’s anthem and it will be played at all future staff events. Mike is exceptionally talented, funny, and thoughtful and we’re lucky our paths crossed.”
          <br />
          -Portland Monthly Magazine
        </p>
        <p>
          “My best friend Vivian hired Mike to compose a Tiny Anthem for me for my birthday, after she had commissioned one for herself and loved the experience. It was one of the most thoughtful, entertaining and personal gifts I’ve ever received! She presented it to me on a thumb drive, along with a sheet of paper announcing the title of the song in calligraphy: “Gina, Chromatic Saint Against Whom All Flames Lap Harmlessly”. The song was luminous and entertaining, hilarious at points but also deeply resonant - and its title has become a bit of a talisman and anchor during life’s ups and downs. Best of all, Mike and I have become good friends as a result of this song being crafted. Highly recommend Tiny Anthems as a unique gift idea!”
          <br/>
          -Gina Altamura
        </p>
      </div>
      <div className="Feedback-comment">
        <div className="Feedback-robot">
          <img src={robot} />
        </div>
        <p>
          "I have been lucky enough to hear 3 songs written by Mike. Each one has been so uniquely crafted and has purely captured the essence of the subject he was singing about. They combine his unique sense of humor, creativity, musical talents and poetic mastery into a perfect little treasure. Everyone that hears these songs is intrigued about the man behind the talent. What will he write next? What does he do other than write genius and hilarious music? What is his favorite food? How tall is he? What would HIS song sound like? Nobody knows, but we're all waiting to find out. Well, I made the last few up, but now I'm curious. I feel lucky to have heard the songs that I have heard and I hope to hear more in my future. If you have the opportunity to commission him to write a song for you, jump on it. You most definitely won't be disappointed and you'll probably laugh until you cry and treasure it."
          <br/>
          -Celia Levites
        </p>
      </div>
    </div>
  );
}

export default Feedback;
