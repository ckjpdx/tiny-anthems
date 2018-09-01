import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import boat from './../assets/img/boat.png';
import waves from './../assets/img/waves.png';
import 'firebase/firestore';
import './Quiz.css';

import { forMeQuestionsArr, forThemQuestionsArr } from './../assets/extras/questionArr';

const Quiz = observer(class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = props.appState;
    this.state.quizData = {
      questions: [],
      answers: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleQuizFormSubmit = this.handleQuizFormSubmit.bind(this);
    this.handleQuizTypeToggle = this.handleQuizTypeToggle.bind(this);
  }

  handleInput(e, question, i) {
    console.log('e:', e, 'question:', question, 'i:', i);
    let newQuizData = Object.assign({}, this.state.quizData);
    newQuizData.questions[i] = question;
    newQuizData.answers[i] = e.target.value;
    this.setState({quizData: newQuizData});
    console.log(this.state);
  }

  handleQuizTypeToggle(e) {
    this.setState({quizType: e.target.id});
    console.log(this.state);
  }

  handleQuizFormSubmit = async (e) => {
    e.preventDefault();
    const checkForAnswers = this.state.quizType === 'for-me'
      ? forMeQuestionsArr.length
      : forThemQuestionsArr.length;
    if (checkForAnswers === this.state.quizData.answers.length) {
      const quizSubmitId = await quizzesCollection.add(this.state); // can return doc.id
      console.log(quizSubmitId.id);
      if (quizSubmitId.id) {
        alert('Your questionnaire has been submitted! Please allow several weeks for song creation. Mike may be in contact with you via email for further information.');
        this.props.history.push('/');
      } else {
        alert('Something broke on the submission! We havent any idea why. Please try again later or contact Mike and tell him to yell at his web developer, Jack.');
      }
    } else {
      alert('Please answer all the questions before submitting!')
    }
  };

  render(){
    const forMeQuestions = <div>
      <input type="radio" checked readOnly />
      <label>Myself</label>
      <p>
        Congratulations on taking the first step toward becoming forever enshrined in the glory of song! In order to get a sense of your personality and thus create a sonic masterpiece befitting one so noble, I’ve put together a small series of questions. They are all optional and there will be a field at the end to freely write anything you choose. It’s possible that none, some, or all of the information will be used in the song, the more information you provide, the better!
      </p>
      {forMeQuestionsArr.map((question, i) =>
        <div className="Quiz-for-me-question" key={'key'+i}>
          <label>{question}</label>
          <textarea type="text" onChange={(e)=>this.handleInput(e, question, i)}/>
        </div>
      )}
      <button onClick={this.handleQuizFormSubmit}>Immortalize!</button>
    </div>;

    const forThemQuestions = <div>
      <input type="radio" checked readOnly />
      <label>Someone Else</label>
      <p>
        Congratulations on choosing to deify and for immortalize a loved one through song. In order to paint a vivid picture of this person’s greatness, I’ll need a little information about them. I have just a few very simple questions about their identifying characteristics. Most importantly, you’ll have a chance to write freely about this person. Details might include BUT ARE ABSOLUTELY NOT LIMITED TO:
      </p>
      <ul>
        <li>Your personal history/relationship with this person</li>
        <li>Personality traits worthy of being forever enshrined in the magnificent glory of song</li>
        <li>Their job, hobbies, etc</li>
        <li>A TV show or piece of pop-culture they’re really into</li>
        <li>Anything weird or interesting about them</li>
      </ul>
      <p>
        Remember that there is no right or wrong information or details to share, per se, but more details to work with are always great and a little specificity goes a long way.
      </p>
      {forThemQuestionsArr.map((question, i) =>
        <div className="Quiz-for-them-question" key={'key'+i}>
          <label>{question}</label>
          <textarea type="text" onChange={(e)=>this.handleInput(e, question, i)}/>
        </div>
      )}
      <button onClick={this.handleQuizFormSubmit}>Immortalize!</button>
    </div>;

    let displayQuiz = null;
    switch(this.state.quizType) {
      case 'for-me':
        displayQuiz = forMeQuestions;
        break;
      case 'for-them':
        displayQuiz = forThemQuestions;
        break;
      default: console.log('Switch Default');
    }

    return (
      <div>
        <h1>Questionnaire</h1>
        {!this.state.quizType &&
        <div>
          <p>You are about to begin your quest. Who is this for?</p>
          <div style={{position: 'relative'}}>
            <img src={waves} alt="waves" id="waves"/>
            <img src={boat} alt="a boat" id="boat"/>
          </div>
          <p>Fill out a questionnaire for:</p>
          <section id="Quiz-labels">
            <div>
              <input type="radio" id="for-me" name="for-who-buttons" onChange={this.handleQuizTypeToggle}/>
              <label htmlFor="for-me">Myself</label>
            </div>
            <div>
              <input type="radio" id="for-them" name="for-who-buttons" onChange={this.handleQuizTypeToggle}/>
              <label htmlFor="for-them">Someone Else</label>
            </div>
          </section>
        </div>
        }
        {displayQuiz}
      </div>
    );
  }
});

export default Quiz;
