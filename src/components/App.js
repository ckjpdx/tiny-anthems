import React, { Component } from 'react';
import './styles/App.css';
import Faq from './Faq';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import Welcome from './Welcome';
import Error404 from './Error404';
import User from './User';
import { Switch, Route, Link } from 'react-router-dom';
import mike from './../assets/img/mike.gif';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isUserSignedIn: false,
      signInButton: 'Sign In'
    };
    this.handleSignInButton = this.handleSignInButton.bind(this);
  }
  handleSignInButton(){
    if (this.state.isUserSignedIn === false){
      this.setState({isUserSignedIn: true});
      this.setState({signInButton: 'Sign Out'});
    } else {
      this.setState({isUserSignedIn: false});
      this.setState({signInButton: 'Sign In'});
    }
  }
  render() {
    let userSignInLinks = null;
    if (this.state.isUserSignedIn){
      userSignInLinks = <div id="sign-in-links">
        <Link to='/user'><button>Profile</button></Link>
      </div>
    }
    return (
      <div className="App">
        <button id="sign-in" onClick={this.handleSignInButton}>{this.state.signInButton}</button>
        {userSignInLinks}
        <img src={mike} alt="cartoon of mike throwing up musical notes" className="mike" />
        <h1 className="title">Tiny Anthems</h1>
        <Link to='/'>Welcome</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/reviews'>Reviews</Link>
        <Switch>
          <Route exact path='/' render={() =>
            <Welcome />} />
          <Route path='/faq' render={() =>
            <Faq />} />
          <Route path='/portfolio' render={() =>
            <Portfolio />} />
          <Route path='/reviews' render={() =>
            <Reviews />} />
          <Route path='/user' render={() =>
            <User />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
