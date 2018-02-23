import React, { Component } from 'react';
import './styles/App.css';
import Faq from './Faq';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/faq'>FAQ</Link>
        <Switch>
          <Route exact path='/faq' render={() =>
            <Faq />} />
        </Switch>

        <Portfolio />
        <Reviews />
      </div>
    );
  }
}

export default App;
