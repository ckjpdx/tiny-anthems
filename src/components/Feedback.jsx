import React from 'react';
import robot from './../assets/img/robot.gif';
import './Feedback.css';

function Feedback(){
  return (
    <div id="Feedback">
      <img src={robot} alt="a robot" className="robot-mobile"/>
      <h1>Voices of the Immortal</h1>
      <div className="Feedback-comment">
        <div className="Feedback-robot">
          <img src={robot} alt="a robot" />
        </div>
        <p>
          “We asked Mike to write a story about our humble city magazine. He delivered—and then some. The final song brought raucous laughter and joy to our editorial staff. We’re officially adopting it as the magazine’s anthem and it will be played at all future staff events. Mike is exceptionally talented, funny, and thoughtful and we’re lucky our paths crossed.”
          <br />
          -Portland Monthly Magazine
        </p>
      </div>
      <div className="Feedback-comment">
        <div className="Feedback-robot">
          <img src={robot} alt="a robot" />
        </div>
        <p>
          "I gave my wife a theme song from Tiny Anthems as an anniversary present. It was an unbelievably awesome experience. The amount of care and thoughtfulness put into the project exceeded my expectations. The communication and back-and-forth was excellent, and resulted in a highly personal (and hilarious) final result. I can't recommend this highly enough, and am excited to commission my next tune soon!"
          <br />
          -Chris G.
        </p>
      </div>
      <div className="Feedback-comment">
        <div className="Feedback-robot">
          <img src={robot} alt="a robot" />
        </div>
        <p>
          "I am so very glad to have come across Mike and Tiny Anthems by happenstance. My wife is a fantastic gifter, much like Leslie Knope from Parks and Recreation. So I was very glad to be able to work with Mike on a song to immortalize her in all of her glory for time immemorial. The song, titled "Cait, Who Never Surrendered To Law Enforcement (She's No Criminal)," is fantastic. I love it even aside from the fact that it's about the woman I love most in the world. Mike's sense of humor comes through strongly, and I had to pause the song the first time I played it because I was giggling too much to continue listening. It is an excellent work of art and Mike was totally awesome throughout the whole process, even making a minor revision when I realized I was missing one useful piece of information he needed. He went above and beyond what I would have expected. And he's super nice, too.
          <br/><br/>
          You think that's the end of the story? It is not! After receiving the song, a coworker of mine inspired me to get the song onto vinyl. I immediately started working with Mike to ensure I had the song in a format best suited to deliver via vinyl. He was enthusiastic and even wanted a copy for himself, which I was absolutely glad to do. Without Mike, I would have been Leslie Knope'd again this Christmas. Now I can win the battle of the best gift!
          <br/><br/>
          *Seriously - Mike is awesome, the song is awesome, and you should get many Tiny Anthems in your life!"
          <br />
          -Robert Ludwick
        </p>
      </div>
      <div className="Feedback-comment">
        <div className="Feedback-robot">
          <img src={robot} alt="a robot" />
        </div>
        <p>
          “My best friend Vivian hired Mike to compose a Tiny Anthem for me for my birthday, after she had commissioned one for herself and loved the experience. It was one of the most thoughtful, entertaining and personal gifts I’ve ever received! She presented it to me on a thumb drive, along with a sheet of paper announcing the title of the song in calligraphy: “Gina, Chromatic Saint Against Whom All Flames Lap Harmlessly”. The song was luminous and entertaining, hilarious at points but also deeply resonant - and its title has become a bit of a talisman and anchor during life’s ups and downs. Best of all, Mike and I have become good friends as a result of this song being crafted. Highly recommend Tiny Anthems as a unique gift idea!”
          <br/>
          -Gina Altamura
        </p>
      </div>
      <div className="Feedback-comment">
        <div className="Feedback-robot">
          <img src={robot} alt="a robot" />
        </div>
        <p>
          "I have been lucky enough to hear 3 songs written by Mike. Each one has been so uniquely crafted and has purely captured the essence of the subject he was singing about. They combine his unique sense of humor, creativity, musical talents and poetic mastery into a perfect little treasure. Everyone that hears these songs is intrigued about the man behind the talent. What will he write next? What does he do other than write genius and hilarious music? What is his favorite food? How tall is he? What would HIS song sound like? Nobody knows, but we're all waiting to find out. Well, I made the last few up, but now I'm curious. I feel lucky to have heard the songs that I have heard and I hope to hear more in my future. If you have the opportunity to commission him to write a song for you, jump on it. You most definitely won't be disappointed and you'll probably laugh until you cry and treasure it."
          <br/>
          -Celia Levites
        </p>
      </div>
      <div className="Feedback-comment">
        <div className="Feedback-robot">
          <img src={robot} alt="a robot" />
        </div>
        <p>
          “You’re incredible.  You brought to our ears the squatch the was hiding in our minds eye for  a long time.  We were blown away with the song and how it came together. You really took it so much further than we ever could have imagined.  Squatch comes alive in the song, we can see him. He was missing a  lyrical personality and you brought it to life.”
          <br/>
          -Amy McFarland
        </p>
      </div>
      <div className="Feedback-comment">
        <div className="Feedback-robot">
          <img src={robot} alt="a robot" />
        </div>
        <p>
          “We played it three times and he cried each time. He loved it. Thank you so much.”
          <br/>
          -Jennifer Dylan
        </p>
      </div>
    </div>
  );
}

export default Feedback;
