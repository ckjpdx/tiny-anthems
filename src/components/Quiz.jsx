import React, { Component } from 'react';
import { observer } from 'mobx-react';
import boat from './../assets/img/boat.png';
import waves from './../assets/img/waves.png';
import 'firebase/firestore';
import './Quiz.css';
import { questionsArr } from './../assets/extras/questionArr';

const Quiz = observer(class Quiz extends Component {

// will need to put uid, etc into quiz on submit
  onContinue = () => {
    const numOfAnsReq = questionsArr.length;
    if (numOfAnsReq <= this.props.appState.quizData.answers.length) {
      this.props.history.push('/user/quiz/payment');
    } else {
      alert('Please answer all the questions!');
    }
  };

  insertQuestions = (questionsArr) =>
    questionsArr.map((question, i) =>
      <div className="Quiz-question" key={'key'+i}>
        <label>{question}</label>
        <textarea
          type="text"
          maxlength={i === 0 && "50"}
          value={this.props.appState.quizData.answers[i]}
          onChange={(e)=>this.props.onQuizInput(e, question, i)}/>
      </div>);

  render(){
    const continueButton = <button id="Quiz-submit" onClick={this.onContinue}>Continue</button>;

    return (
      <div className="Quiz">
        <div style={{position: 'relative'}}>
          <img src={waves} alt="waves" id="waves"/>
          <img src={boat} alt="a boat" id="boat"/>
        </div>
        <h1>Immortalization Application</h1>
        <div>
          <p>
            You have embarked on your journey. Congratulations on taking the first step on the path toward musical immortality. In order to compose a vivid musical homage to the subject, Tiny Anthems requires your participation!
          </p>
          <p>
            Whether you are choosing to have a piece composed for yourself, a spouse, a crow you saw one time, or a business, I leave it up to you to guide the process. There is no right or wrong information to provide, but as a general rule, the more you can tell me about the subject, the better. Nicknames, ages, interests, accomplishments, etc. YOU CAN DO THIS.
          </p>
          {this.insertQuestions(questionsArr)}
          {continueButton}
        </div>
      </div>
    );
  }
});

export default Quiz;
