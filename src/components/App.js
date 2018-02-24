import React, { Component } from 'react';
import './styles/App.css';
import Faq from './Faq';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import Welcome from './Welcome';
import { Switch, Route, Link } from 'react-router-dom';
import mike from './../assets/img/mike.gif';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        </Switch>
      </div>
    );
  }
}

export default App;
