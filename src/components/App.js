import React from 'react';
import './styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Faq from './Faq';
import Portfolio from './Portfolio';
import ReviewList from './ReviewList';
import Welcome from './Welcome';
import Questionnaire from './Questionnaire';
import Error404 from './Error404';
import User from './User';
import { Switch, Route, Link } from 'react-router-dom';
import mike from './../assets/img/mike.gif';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signIn: {
        isUserSignedIn: false,
        signInButtonText: 'Sign In'
      }
    };
    this.handleSignInButton = this.handleSignInButton.bind(this);
  }
  handleSignInButton(){
    if (this.state.signIn.isUserSignedIn === false){
      this.setState({signIn:{isUserSignedIn: true, signInButtonText: 'Sign Out'}});
    } else {
      this.setState({signIn:{isUserSignedIn: false, signInButtonText: 'Sign In'}});
    }
  }
  render() {
    let userSignInLinks = null;
    if (this.state.signIn.isUserSignedIn){
      userSignInLinks = <div id="sign-in-links">
        <Link to='/user'><button>Profile</button></Link>
      </div>
    }
    return (
      <div className="App">
        <button id="sign-in" onClick={this.handleSignInButton}>{this.state.signIn.signInButtonText}</button>
        {userSignInLinks}
        <img src={mike} alt="cartoon of mike throwing up musical notes" className="mike" />
        <h1 className="title">Tiny Anthems</h1>
        <Link to='/'>Welcome</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/review-list'>Reviews</Link>
        <Switch>
          <Route exact path='/' render={() =>
            <Welcome />} />
          <Route path='/faq' render={() =>
            <Faq />} />
          <Route path='/portfolio' render={() =>
            <Portfolio />} />
          <Route path='/review-list' render={() =>
            <ReviewList />} />
          <Route exact path='/user' render={() =>
            <User />} />
          <Route path='/user/questionnaire' render={() =>
            <Questionnaire />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
