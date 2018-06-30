import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { usersCollection } from './../store';
import * as firebase from 'firebase';
import Login from './common/Login';
import Faq from './Faq';
import About from './About';
import Portfolio from './Portfolio';
import Feedback from './Feedback';
import Welcome from './Welcome';
import Admin from './Admin';
import WriteReview from './WriteReview';
import Quiz from './Quiz';
import Error404 from './Error404';
import User from './User';
import PrivateRoute from './common/PrivateRoute';
import './styles/App.css';
import sharpie from './../assets/img/tiny_sharpie.png';
import NavDrawer from './common/NavDrawer';

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

  handleSignIn = (user) => {
    this.setState({
      uid: user.uid,
      name: user.displayName,
      email: user.email
    });
    this.props.history.push('/user');
  }

  handleSignOut = () => {
    this.setState({uid: null, name: null, email: null});
  }

  render() {
    console.log(this.props.history);
    return (
      <div className="App">
        <NavDrawer appState={this.state}/>
        <div className="App-nav-header">
          <a className="App-readme-link" href="https://github.com/ckjpdx/tiny-anthems/blob/master/README.md" target="_blank">README</a>
          <div id="App-profile-button">
            <Link to='/user'><p style={{fontFamily: 'monospace'}}>{this.state.email}</p></Link>
            <Login appState={this.state} showLogout="true"/>
          </div>
          {/* <Link className="App-link" to='/faq'></Link>
          <Link className="App-link" to='/portfolio'></Link>
          <Link className="App-link" to='/review-list'></Link> */}
        </div>
        {this.props.history.location.pathname !== '/' && <img src={sharpie} />}
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/faq' component={Faq} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/feedback' component={Feedback} />
          <PrivateRoute exact path='/user' component={User} appState={this.state}/>
          <PrivateRoute exact path='/user/quiz' appState={this.state} component={Quiz} />
          <Route exact path='/user/review' render={() =>
            <WriteReview />} />
          <PrivateRoute exact path='/admin' component={Admin} appState={this.state}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
