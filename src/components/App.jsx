import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import Home from './Home';
import Faq from './Faq';
import About from './About';
import Portfolio from './Portfolio';
import Feedback from './Feedback';
import Welcome from './Welcome';
import Admin from './Admin';
import Quiz from './Quiz';
import Payment from './Payment';
import Complete from './Complete';
import User from './User';
import UserSong from './UserSong';
import PrivateRoute from './common/PrivateRoute';
import NavDrawer from './common/NavDrawer';
import Error404 from './Error404';
import sharpie from './../assets/img/tiny_sharpie.png';
import './App.css';
import {Elements, StripeProvider} from 'react-stripe-elements';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      email: null,
      name: null,
      quizData: {
        questions: [],
        answers: []
      },
      quizType: null
    };
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.handleSignIn(user);
      } else {
        this.handleSignOut();
      }
    });
  }

  handleSignIn = (user) => {
    this.setState({
      uid: user.uid,
      name: user.displayName,
      email: user.email
    });
    this.props.history.push('/user/quiz/payment');
  }

  handleSignOut = () => {
    this.setState({uid: null, name: null, email: null});
  }

  handleSong = (song) => {
    this.setState({songSelected: song});
  }

  handleQuizInput = (e, question, i) =>  {
    const newQuizData = Object.assign({}, this.state.quizData);
    newQuizData.questions[i] = question;
    newQuizData.answers[i] = e.target.value;
    this.setState({quizData: newQuizData});
  }

  handleQuizType = (e) => {
    this.setState({quizType: e.target.id});
  }

  handleClearQuiz = () => {
    this.setState({
      quizData: {
        questions: [],
        answers: []
      },
      quizType: null
    });
  }

  render() {
    const navAndTitle = this.props.history.location.pathname !== '/'
    && <div id="App-nav-and-title">
        <div className="App-NavDrawer">
          <NavDrawer appState={this.state} />
        </div>
        <img src={sharpie} id="App-tiny-sharpie" alt="tiny anthems title" />
      </div>;
    return (
      <div className="App">
        {navAndTitle}
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/home' render={props => <Home {...props} appState={this.state} /> } />
          <Route path='/faq' component={Faq} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/feedback' component={Feedback} />
          <PrivateRoute exact path='/user' component={User} appState={this.state} onSongSelect={this.handleSong}/>
          <PrivateRoute exact path='/user/song' component={UserSong} appState={this.state} songSelected={this.state.songSelected}/>
          <PrivateRoute exact path='/user/quiz'
            component={Quiz}
            appState={this.state}
            onQuizInput={this.handleQuizInput}
            onQuizType={this.handleQuizType} />
          <StripeProvider apiKey="pk_live_DXZHnIPbi73ySKKiyDkLD1NO">
            <Elements>
              <PrivateRoute exact path='/user/quiz/payment'
                component={Payment}
                appState={this.state}
                onClearQuiz={this.handleClearQuiz} />
            </Elements>
          </StripeProvider>
          <Route exact path='/user/quiz/complete' component={Complete} />
          <PrivateRoute exact path='/admin' component={Admin} appState={this.state} adminRoute={true}/> } />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
