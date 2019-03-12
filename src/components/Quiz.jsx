import React, { Component } from 'react';
import { observer } from 'mobx-react';
import boat from './../assets/img/boat.png';
import waves from './../assets/img/waves.png';
import 'firebase/firestore';
import './Quiz.css';
import { forMeQuestionsArr, forThemQuestionsArr, forItQuestionsArr } from './../assets/extras/questionArr';

const Quiz = observer(class Quiz extends Component {

// will need to put uid, etc into quiz on submit
  onContinue = () => {
    const numOfAnsReq =
    this.props.appState.quizType === 'for-me'
      ? forMeQuestionsArr.length :
    this.props.appState.quizType === 'for-them'
      ? forThemQuestionsArr.length
      : forItQuestionsArr.length;
    if (numOfAnsReq <= this.props.appState.quizData.answers.length) {
      this.props.history.push('/user/quiz/payment');
    } else {
      alert('Please answer all the questions!');
    }
  };

  render(){
    const continueButton = <button id="Quiz-submit" onClick={this.onContinue}>Continue</button>;

    const forMeQuestions = <div>
      <p>
        Congratulations on taking the first step toward becoming forever enshrined in the glory of song! In order to get a sense of your personality and thus create a sonic masterpiece befitting one so noble, I’ve put together a small series of questions. The more information you provide about a subject, the better.
      </p>
      {forMeQuestionsArr.map((question, i) =>
        <div className="Quiz-for-me-question" key={'key'+i}>
          <label>{question}</label>
          <textarea type="text" maxlength={i === 0 && "50"}
          value={this.props.appState.quizData.answers[i]}
          onChange={(e)=>this.props.onQuizInput(e, question, i)}/>
        </div>
      )}
      {continueButton}
    </div>;

    const forThemQuestions = <div>
      <p>
        Congratulations on choosing to immortalize a loved one through song. In order to paint a vivid picture of this person’s greatness, I’ll need a little information about them. I have just a few very simple questions about their identifying characteristics. Most importantly, you’ll have a chance to write freely about this person. Details might include BUT ARE ABSOLUTELY NOT LIMITED TO:
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
          <textarea type="text" maxlength={i === 0 && "50"}
          value={this.props.appState.quizData.answers[i]}
          onChange={(e)=>this.props.onQuizInput(e, question, i)}/>
        </div>
      )}
      {continueButton}
    </div>;

    const forItQuestions = <div>
    <p>
      You have chosen to have a Tiny Anthem composed about someone or something that is not a human. Perhaps it’s for a business! Perhaps it’s for a film you’d like to make about volcanoes. Perhaps it’s a piece of ambient music to be played at your next underwater yoga class. I don’t know because you haven’t told me yet! Let’s remedy that via the box below.
    </p>
      {forItQuestionsArr.map((question, i) =>
        <div className="Quiz-for-it-question" key={'key'+i}>
          <label>{question}</label>
          <textarea type="text" maxlength={i === 0 && "50"}
          value={this.props.appState.quizData.answers[i]}
          onChange={(e)=>this.props.onQuizInput(e, question, i)}/>
        </div>
      )}
      {continueButton}
    </div>

    return (
      <div className="Quiz">
        <h1>Questionnaire</h1>
        {!this.props.appState.quizType &&
        <div>
          <p>You are about to begin your quest. Who is this for?</p>
          <div style={{position: 'relative'}}>
            <img src={waves} alt="waves" id="waves"/>
            <img src={boat} alt="a boat" id="boat"/>
          </div>
        </div>
        }
        <p>Fill out a questionnaire for:</p>
        <section id="Quiz-labels">
          <div>
            <input type="radio" id="for-me" name="for-who-buttons" onChange={this.props.onQuizType}/>
            <label htmlFor="for-me">Myself</label>
          </div>
          <div>
            <input type="radio" id="for-them" name="for-who-buttons" onChange={this.props.onQuizType}/>
            <label htmlFor="for-them">Someone Else</label>
          </div>
          <div>
            <input type="radio" id="for-it" name="for-who-buttons" onChange={this.props.onQuizType}/>
            <label htmlFor="for-it">Non-human Entity</label>
          </div>
        </section>
        {this.props.appState.quizType === 'for-me' ? forMeQuestions : this.props.appState.quizType === 'for-them' ? forThemQuestions :
        this.props.appState.quizType === 'for-it' ? forItQuestions : null}
      </div>
    );
  }
});

export default Quiz;
