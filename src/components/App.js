import React from 'react';
// import { observer } from 'mobx-react';
import './styles/App.css';
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
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import mike from './../assets/img/mike.gif';
import * as firebase from 'firebase';
import PrivateRoute from './reusable/PrivateRoute';
import { usersCollection } from './../store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      email: null,
      name: null, // delete this laterz
      pending: true
    };
  }

  handleSignIn = (userResult) => {
    this.setState({
      uid: userResult.uid,
      name: userResult.displayName,
      email: userResult.email
    });
    console.log(this.state);
  }

  handleSignOut = () => {
    this.setState({uid: null, name: null, email: null});
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div id="App-profile-button">
          <Link to='/user'><p style={{fontFamily: 'monospace'}}>{this.state.email}</p></Link>
          <Login appState={this.state} onSignIn={this.handleSignIn} onSignOut={this.handleSignOut}/>
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

export default App;
