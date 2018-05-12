import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection, usersCollection, userDoc } from './../store';

const Quiz = observer(class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleQuizFormSubmit = this.handleQuizFormSubmit.bind(this);
    userDoc.fetch().then(({data}) => console.log(data.snapshot));
    console.log(userDoc);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleQuizFormSubmit = async () => {
    const quizRefs = userDoc.data.quiz_refs;
    console.log('user data quizz_refs:', quizRefs);
    const doc = await quizzesCollection.add(this.state);
    const newQuizRefs = quizRefs ? quizRefs.push(doc.id) : [doc.id];
    await userDoc.set({quiz_refs: newQuizRefs}, {merge: true});
  };

  render(){
    return (
      <div>
        {userDoc.data.quiz_refs}
        <h1>Questionnaire</h1>
        {this.state.quizRefs}
        <p>
          `Welcome, friend. I'm going to ask you a series of questions. Some of them will seem like obvious get-to-know-you type of inquiries. Others will appear bizarre and irrelevant. You are free to skip any questions you'd like, of course, and there will be time at the end for you to provide any additional biographical information you'd like.`
        </p>
        <p>
          `Note that sometimes I will reference the things you mention in song, and sometimes I won't. It's less of a madlib for music and more of me trying to have a strange roadmap to navigate the songwriting process. Thank you, and enjoy the questions!`
        </p>
        <h2>Answer these questions:</h2>
          <label>Name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label>DOB:</label>
          <input type="text" name="dob" onChange={this.handleChange} />
          <label>Favorite Food:</label>
          <input type="text" name="favoriteFood" onChange={this.handleChange} />
          <button onClick={this.handleQuizFormSubmit}>Make me immortal thru song</button>
      </div>
    );
  }
});

export default Quiz;
