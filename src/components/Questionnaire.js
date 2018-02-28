import React from 'react';

function Questionnaire(){
  return (
    <div>
      <h1>Questionnaire</h1>
      <p>
        `Welcome, friend. I'm going to ask you a series of questions. Some of them will seem like obvious get-to-know-you type of inquiries. Others will appear bizarre and irrelevant. You are free to skip any questions you'd like, of course, and there will be time at the end for you to provide any additional biographical information you'd like.`
      </p>
      <p>
        `Note that sometimes I will reference the things you mention in song, and sometimes I won't. It's less of a madlib for music and more of me trying to have a strange roadmap to navigate the songwriting process. Thank you, and enjoy the questions!`
      </p>
      <h2>Questions:</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name"/>
        <label>DOB:</label>
        <input type="text" name="dob"/>
        <label>Where are you from/did you grow up?</label>
        <input type="text" name="where-from"/>
        <label>Favorite Animal</label>
        <input type="text" name="fav-animal"/>
        <label>Profession</label>
        <input type="text" name="profession"/>
        <label>Interests that are not your work</label>
        <input type="text" name="nonwork-interests"/>
        <label>Favorite Episode of Friends</label>
        <input type="text" name="fav-friends-episode"/>
        <label>Feelings on Space Travel</label>
        <input type="text" name="space-travel"/>
        <label>Fictional Character That You Admire/Are Similar To</label>
        <input type="text" name="fictional-character"/>
        <label>Feelings on breakfast.</label>
        <input type="text" name="breakfast-feelings"/>
        <label>Thoughts on Ghosts?</label>
        <input type="text" name="ghost-thoughts"/>
        <label>How good of a boxer would you be?</label>
        <input type="text" name="boxing-skill"/>
        <label>Favorite Bands/Songs?</label>
        <input type="text" name="fav-music"/>
        <label>If you could time travel to any place/time where/when would you go?</label>
        <input type="text" name="fav-era"/>
        <label>First Childhood memory?</label>
        <input type="text" name="first-memory"/>
        <label>Any recurring dreams or dreams that stand-out, generally?</label>
        <input type="text" name="notable-dreams"/>
        <label>If you had to watch one movie on loop forever, what would you choose?</label>
        <input type="text" name="forever-movie"/>
        <h3>Please Rate Your: (1-10)</h3>
        <label>Strength</label>
        <input type="text" name="strength"/>
        <label>Speed</label>
        <input type="text" name="speed"/>
        <label>Stamina</label>
        <input type="text" name="stamina"/>
        <label>Spellcasting</label>
        <input type="text" name="spellcasting"/>
        <label>Napping</label>
        <input type="text" name="napping"/>
        <label>Knowledge of table manners/cutlery placement</label>
        <input type="text" name="manners"/>
        <label>Hand-eye coordination</label>
        <input type="text" name="coordination"/>
        <label>Wildlife spotting</label>
        <input type="text" name="wildlife-spotting"/>
        <label>Wildlife identifying</label>
        <input type="text" name="wildlife-identifying"/>
        <label>Math skills</label>
        <input type="text" name="math-skills"/>
        <label>Level of comfort with babies</label>
        <input type="text" name="baby-comfort"/>
        <label>Level of comfort with very old people</label>
        <input type="text" name="eldery-comfort"/>
        <label>Hygiene</label>
        <input type="text" name="hygiene"/>
        <label>Penmanship</label>
        <input type="text" name="penmanship"/>
        <label>Knowledge of stellar bodies (stars, planets, etc)</label>
        <input type="text" name="stellar-knowledge"/>
        <label>Ability to hold your breath</label>
        <input type="text" name="holding-breath"/>
        <label>Handstand skills</label>
        <input type="text" name="handstanding"/>
        <label>How do you feel about flying?</label>
        <input type="text" name="flying-opinion"/>
        <label>What is your dream job?</label>
        <input type="text" name="dream-job"/>
        <label>Is climate change a big deal?</label>
        <input type="text" name="climate-change-opinion"/>
        <label>Is Star Wars worth the hype? (The original)</label>
        <input type="text" name="star-wars-opinion"/>
        <label>What would your talent be on an “America’s Got Talent” type of show?</label>
        <input type="text" name="talent"/>
        <label>Do you have a go-to karaoke song?</label>
        <input type="text" name="karaoke-song"/>
        <label>Is there anything else you’d like to share?</label>
        <textarea name="anything-else"/>
      </form>
    </div>
  );
}

export default Questionnaire;
