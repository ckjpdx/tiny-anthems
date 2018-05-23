import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { usersCollection } from './../store';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';
import Faq from './Faq';
import Portfolio from './Portfolio';
import ReviewList from './ReviewList';
import Welcome from './Welcome';
import Admin from './Admin';
import AdminSearch from './AdminSearch';
import WriteReview from './WriteReview';
import Quiz from './Quiz';
import Error404 from './Error404';
import User from './User';
import PrivateRoute from './reusable/PrivateRoute';
import mike from './../assets/img/mike.gif';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      email: null,
      name: null,
      pending: true
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
    return (
      <div className="App">
        <div id="App-profile-button">
          <Link to='/user'><p style={{fontFamily: 'monospace'}}>{this.state.email}</p></Link>
          <Login appState={this.state} />
        </div>
        <img src={mike} alt="cartoon of mike throwing up musical notes" className="mike" />
        <h1 className="title">Tiny Anthems</h1>
        <div id="App-main-links">
          <Link className="App-link" to='/'>Welcome</Link>
          <Link className="App-link" to='/faq'>FAQ</Link>
          <Link className="App-link" to='/portfolio'>Portfolio</Link>
          <Link className="App-link" to='/review-list'>Reviews</Link>
        </div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/faq' component={Faq} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/review-list' component={ReviewList} />
          <PrivateRoute exact path='/user' component={User} appState={this.state}/>
          <PrivateRoute exact path='/user/quiz' appState={this.state} component={Quiz} />
          <Route exact path='/user/review' render={() =>
            <WriteReview />} />
          <PrivateRoute exact path='/admin' component={Admin} appState={this.state}/>} />
          <Route exact path='/admin/search' render={() =>
            <AdminSearch />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
