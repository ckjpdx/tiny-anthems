import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import Faq from './Faq';
import About from './About';
import Portfolio from './Portfolio';
import Feedback from './Feedback';
import Home from './Home';
import Admin from './Admin';
import WriteReview from './WriteReview';
import Quiz from './Quiz';
import Error404 from './Error404';
import User from './User';
import PrivateRoute from './common/PrivateRoute';
import NavDrawer from './common/NavDrawer';
import sharpie from './../assets/img/tiny_sharpie.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      email: null,
      name: null,
      pending: true,
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

  handleSignIn = (user, redirect = false) => {
    this.setState({
      uid: user.uid,
      name: user.displayName,
      email: user.email
    });
    redirect && this.props.history.push('/user');
  }

  handleSignOut = () => {
    this.setState({uid: null, name: null, email: null});
  }

  render() {
    const navAndTitle = this.props.history.location.pathname !== '/' && <div id="App-nav-and-title"><NavDrawer appState={this.state}/><img src={sharpie} id="App-tiny-sharpie" alt="tiny anthems title" /></div>;
    return (
      <div className="App">
        {navAndTitle}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/faq' component={Faq} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/feedback' component={Feedback} />
          <PrivateRoute exact path='/user' component={User} appState={this.state}/>
          <PrivateRoute exact path='/user/quiz' appState={this.state} component={Quiz} />
          <Route exact path='/user/review' render={() =>
            <WriteReview />} />
          <PrivateRoute exact path='/admin' component={Admin} appState={this.state} adminRoute={true}/> } />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
