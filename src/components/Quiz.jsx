import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection, usersCollection, userDoc } from './../store';
import firebase from 'firebase';
import 'firebase/firestore';

const Quiz = observer(class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = props.appState;
    this.handleChange = this.handleChange.bind(this);
    this.handleQuizFormSubmit = this.handleQuizFormSubmit.bind(this);
  }

  handleChange(e) {
    let newQuestions = Object.assign({}, this.state.questions);
    newQuestions[e.target.name] = e.target.value;
    this.setState({questions: newQuestions});
  }

  handleQuizFormSubmit = async (e) => {
    e.preventDefault();
    const quizSubmitId = await quizzesCollection.add(this.state); // can return doc.id
    console.log(quizSubmitId.id);
    if (quizSubmitId.id) {
      alert('Your questionnaire has been submitted! Please allow several weeks for song creation. Mike may be in contact with you via email for further information.');
      this.props.history.push('/');
    } else {
      alert('Something broke on the submission! We havent any idea why. Please try again later or contact Mike and tell him his stupid app is broken so he can come yell at me.');
    }
  };


  render(){
    const forMeQuestions = <div>
      <label>What is your name? Do you have any nicknames?</label>
      <textarea type="text" name="nameOrNickname" onChange={this.handleChange} />
      <label>When were you born?</label>
      <textarea type="text" name="whenBorn" onChange={this.handleChange} />
      <label>What are some of your hobbies or interests?</label>
      <textarea type="text" name="hobbiesInterests" onChange={this.handleChange} />
      <label>Who are some of your favorite characters, fictional or non-fictional and why?</label>
      <textarea type="text" name="favoriteCharacters" onChange={this.handleChange} />
      <label>What are some accomplishments or victories that you’re proud of? What are some of your future goals?</label>
      <textarea type="text" name="accomplishments" onChange={this.handleChange} />
      <label>Describe a memorable life experience you’ve had with an animal or with a special place. OR BOTH.</label>
      <textarea type="text" name="memorableExperience" onChange={this.handleChange} />
      <label>What are some things you wish had never been invented and why?</label>
      <textarea type="text" name="neverInvented" onChange={this.handleChange} />
      <label>If you had a super power, what would it be and why? What would you do with it? DON’T YOU LIE TO ME.</label>
      <textarea type="text" name="superPower" onChange={this.handleChange} />
      <label>If you could book a round-trip ticket to anywhere in a time machine, where and when would you go? What if it was one-way?</label>
      <textarea type="text" name="timeMachine" onChange={this.handleChange} />
      <label>If there was a meteor on a collision course with the earth in two weeks, how would you spend that time?</label>
      <textarea type="text" name="meteorDeath" onChange={this.handleChange} />
      <label>Anything else you’d like to share: (This can be a personal biography, story that you think defines you, list of stuff you like, or anything else you think sheds light on who you are)</label>
      <textarea type="text" name="anythingElse" onChange={this.handleChange} />
      <button onClick={this.handleQuizFormSubmit}>Immortalize me thru song</button>
    </div>;

    const forThemQuestions = <div>
      <label>Who is this for? What names do people call them by?</label>
      <input type="text" name="whosThisFor" onChange={this.handleChange} />
      <button onClick={this.handleQuizFormSubmit}>Immortalize them thru song</button>
    </div>;

    return (
      <div>
        <h1>Questionnaire</h1>
        <p>
          In order to get a sense of your personality to guide the song, I’ve put together a small series of questions. They are all optional and there will be a field at the end to freely write anything you choose. It’s possible that none, some, or all of the information will be used in the song, the more information you provide, the better!
        </p>
        <h2>Answer these questions:</h2>
        {forMeQuestions}
      </div>
    );
  }
});

export default Quiz;
