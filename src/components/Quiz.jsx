import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import boat from './../assets/img/boat.png';
import waves from './../assets/img/waves.png';
import 'firebase/firestore';
import './Quiz.css';
import { forMeQuestionsArr, forThemQuestionsArr } from './../assets/extras/questionArr';
import * as emailjs from 'emailjs-com';

import DialogThanks from './DialogThanks';

const Quiz = observer(class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {quiz: null, dialog: false};
    this.state.quiz = props.appState;
    this.state.quiz.quizData = {
      questions: [],
      answers: []
    };
    console.log(this.state);
    this.handleInput = this.handleInput.bind(this);
    this.handleQuizFormSubmit = this.handleQuizFormSubmit.bind(this);
    this.handleQuizTypeToggle = this.handleQuizTypeToggle.bind(this);
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  handleInput(e, question, i) {
    console.log('e:', e, 'question:', question, 'i:', i);
    const newQuiz = Object.assign({}, this.state.quiz);
    console.log(this.state, newQuiz);
    newQuiz.quizData.questions[i] = question;
    newQuiz.quizData.answers[i] = e.target.value;
    this.setState({quiz: newQuiz});
    console.log(this.state.quiz);
  }

  handleQuizTypeToggle(e) {
    const newQuiz = Object.assign({}, this.state.quiz);
    newQuiz.quizType = e.target.id;
    this.setState({quiz: newQuiz});
    console.log(this.state.quiz);
  }

  handleQuizFormSubmit = async (e) => {
    e.preventDefault();
    const checkForAnswers = this.state.quiz.quizType === 'for-me'
      ? forMeQuestionsArr.length
      : forThemQuestionsArr.length;
    if (checkForAnswers === this.state.quiz.quizData.answers.length) {
      document.getElementById("Quiz-submit").disabled = true;
      const quizSubmitId = await quizzesCollection.add(this.state.quiz); // can return doc.id
      if (quizSubmitId.id) {
        emailjs.init(process.env.REACT_APP_EMAILJS);
        const templateParams = {
          name: this.state.quiz.name,
          email: this.state.quiz.email
        };
        emailjs.send('gmail', 'template_vk6ykRLd', templateParams)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(err) {
            console.log('FAILED...', err);
          });
        this.handleDialogOpen();
      } else {
        alert('Something broke on the submission! We havent any idea why. Please try again later or contact Mike and tell him to yell at his web developer, Jack.');
      }
    } else {
      alert('Please answer all the questions before submitting!');
    }
  };

  handleDialogOpen = () => this.setState({dialog: true});
  handleDialogClose = () => {
    this.setState({dialog: false});
    this.props.history.push('/user');
  };

  render(){
    const submitButton = <button id="Quiz-submit" onClick={this.handleQuizFormSubmit}>Immortalize!</button>;

    const forMeQuestions = <div>
      <input type="radio" checked readOnly />
      <label>Myself</label>
      <p>
        Congratulations on taking the first step toward becoming forever enshrined in the glory of song! In order to get a sense of your personality and thus create a sonic masterpiece befitting one so noble, I’ve put together a small series of questions. The more information you provide about a subject, the better.
      </p>
      {forMeQuestionsArr.map((question, i) =>
        <div className="Quiz-for-me-question" key={'key'+i}>
          <label>{question}</label>
          <textarea type="text" onChange={(e)=>this.handleInput(e, question, i)}/>
        </div>
      )}
      {submitButton}
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
      {submitButton}
    </div>;

    return (
      <div>
        <h1>Questionnaire</h1>
        {!this.state.quiz.quizType &&
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
        {this.state.quiz.quizType === 'for-me' ? forMeQuestions : this.state.quiz.quizType === 'for-them' ? forThemQuestions : null}
        <DialogThanks open={this.state.dialog} onClose={this.handleDialogClose}/>
      </div>
    );
  }
});

export default Quiz;
