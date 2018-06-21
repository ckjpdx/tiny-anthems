import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection, usersCollection, userDoc } from './../store';
import firebase from 'firebase';
import 'firebase/firestore';

const Quiz = observer(class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = props.appState;
    this.handleInput = this.handleInput.bind(this);
    this.handleQuizFormSubmit = this.handleQuizFormSubmit.bind(this);
    this.handleQuizTypeToggle = this.handleQuizTypeToggle.bind(this);
  }

  handleInput(e) {
    let newQuestions = Object.assign({}, this.state.questions);
    newQuestions[e.target.name] = e.target.value;
    this.setState({questions: newQuestions});
  }

  handleQuizTypeToggle(e) {
    this.setState({quizType: e.target.id});
    console.log(this.state);
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
      <input type="radio" checked readOnly />
      <label>Myself</label>
      <p>
        In order to get a sense of your personality to guide the song, I’ve put together a small series of questions. They are all optional and there will be a field at the end to freely write anything you choose. It’s possible that none, some, or all of the information will be used in the song, the more information you provide, the better!
      </p>
      <label>What is your name? Do you have any nicknames?</label>
      <textarea type="text" name="nameOrNickname" onChange={this.handleInput} />
      <label>When were you born?</label>
      <textarea type="text" name="whenBorn" onChange={this.handleInput} />
      <label>What are some of your hobbies or interests?</label>
      <textarea type="text" name="hobbiesInterests" onChange={this.handleInput} />
      <label>Who are some of your favorite characters, fictional or non-fictional and why?</label>
      <textarea type="text" name="favoriteCharacters" onChange={this.handleInput} />
      <label>What are some accomplishments or victories that you’re proud of? What are some of your future goals?</label>
      <textarea type="text" name="accomplishments" onChange={this.handleInput} />
      <label>Describe a memorable life experience you’ve had with an animal or with a special place. OR BOTH.</label>
      <textarea type="text" name="memorableExperience" onChange={this.handleInput} />
      <label>What are some things you wish had never been invented and why?</label>
      <textarea type="text" name="neverInvented" onChange={this.handleInput} />
      <label>If you had a super power, what would it be and why? What would you do with it? DON’T YOU LIE TO ME.</label>
      <textarea type="text" name="superPower" onChange={this.handleInput} />
      <label>If you could book a round-trip ticket to anywhere in a time machine, where and when would you go? What if it was one-way?</label>
      <textarea type="text" name="timeMachine" onChange={this.handleInput} />
      <label>If there was a meteor on a collision course with the earth in two weeks, how would you spend that time?</label>
      <textarea type="text" name="meteorDeath" onChange={this.handleInput} />
      <label>Anything else you’d like to share: (This can be a personal biography, story that you think defines you, list of stuff you like, or anything else you think sheds light on who you are)</label>
      <textarea type="text" name="anythingElse" onChange={this.handleInput} />
      <button onClick={this.handleQuizFormSubmit}>Immortalize me thru song</button>
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
      <label>Who is this for? Enter names/aliases for this person:</label>
      <textarea type="text" name="whosThisFor" onChange={this.handleInput} />
      <label>Write here about this person:</label>
      <textarea type="text" name="aboutSomeoneElse" onChange={this.handleInput} />
      <button onClick={this.handleQuizFormSubmit}>Immortalize them thru song</button>
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
          <p>Fill out a questionnaire for:</p>
          <input type="radio" id="for-me" name="for-who-buttons" onChange={this.handleQuizTypeToggle}/>
          <label htmlFor="for-me">Myself</label>
          <input type="radio" id="for-them" name="for-who-buttons" onChange={this.handleQuizTypeToggle}/>
          <label htmlFor="for-them">Someone Else</label>
        </div>
        }
        {displayQuiz}
      </div>
    );
  }
});

export default Quiz;
