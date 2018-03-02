import React from 'react';
import { v4 } from 'uuid';

function Questionnaire(props){
  let _name = null;
  let _dob = null;
  let _anythingElse = null;
  function handleQuestionnaireFormSubmit(e){
    e.preventDefault();
    const newQuestionnare = {
      id: v4(),
      name: _name.value,
      dob: _dob.value,
      anythingElse: _anythingElse.value
    }
    console.log(newQuestionnare);
    props.onQuestionnaireFormSubmit(newQuestionnare);
  }
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
      <form onSubmit={handleQuestionnaireFormSubmit}>
        <label>Name:</label>
        <input type="text" ref={(input) => {_name = input;}}/>
        <label>DOB:</label>
        <input type="text" ref={(input) => {_dob = input;}}/>
        <label>Is there anything else you’d like to share?</label>
        <textarea ref={(input) => {_anythingElse = input;}}/>
        <button type="submit">Make me immortal thru song</button>
      </form>
    </div>
  );
}

export default Questionnaire;
