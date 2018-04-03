import React, { Component } from 'react';
import { observer } from 'mobx-react';
import v4 from 'uuid';
import { quizzesCollection } from './../store';
import { usersCollection } from './../store';

const Quiz = observer(class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      dob: null,
      anythingElse: null
    };
  }

  onQuizFormSubmit = async () => {
    const uuidForQuiz = v4();
    const newQuiz = {
      userId: null,
      quizId: uuidForQuiz,
      name: this.state.name.value,
      dob: this.state.dob.value,
      anythingElse: this.state.anythingElse.value
    }
    const doc = await quizzesCollection.add({
      uuidForQuiz: newQuiz
    });
    console.log(doc.id);
  };

  render(){
    return (
      <div>
        <h1>Questionnaire</h1>
        <p>
          `Welcome, friend. I'm going to ask you a series of questions. Some of them will seem like obvious get-to-know-you type of inquiries. Others will appear bizarre and irrelevant. You are free to skip any questions you'd like, of course, and there will be time at the end for you to provide any additional biographical information you'd like.`
        </p>
        <p>
          `Note that sometimes I will reference the things you mention in song, and sometimes I won't. It's less of a madlib for music and more of me trying to have a strange roadmap to navigate the songwriting process. Thank you, and enjoy the questions!`
        </p>
        <h2>Answer these questions:</h2>
          <label>Name:</label>
          <input type="text" ref={(input) => {this.state.name = input;}}/>
          <label>DOB:</label>
          <input type="text" ref={(input) => {this.state.dob = input;}}/>
          <label>Is there anything else you’d like to share?</label>
          <textarea ref={(input) => {this.state.anythingElse = input;}}/>
          <button onClick={this.onQuizFormSubmit}>Make me immortal thru song</button>
      </div>
    );
  }
});

export default Quiz;
