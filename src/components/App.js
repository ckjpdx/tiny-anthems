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
import { usersCollection, userDoc } from './../store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: 'w6kuWYde9GM5A8Vjn72Y5fIjOhG2' // delete this later
    };
  }

  handleSongUpload(newSong){
    const newSongsById = Object.assign({}, this.state.songsById, {[newSong.id]: newSong});
    this.setState({songsById: newSongsById});
    console.log(this.state);
  }

  handleSignIn = async (userResult) => {
    await userDoc.set({
      uid: userResult.uid,
      displayName: userResult.displayName,
      email: userResult.email
    }, true);
    this.setState({
      uid: userResult.uid,
      userName: userResult.displayName
    });
    console.log(this.state);
  }

  handleSignOut = async () => {
    console.log('LOG OUT USER');
    this.state = Object.assign({});
    console.log(this.state);
  }

  render() {
    const signInOrOut = this.state.uid ? 'Sign Out' : 'Sign In';
    return (
      <div className="App">
        <div id="App-profile-button">
          <p style={{fontFamily: 'monospace'}}>{this.state.userName}</p>
          {/* {isAdmin ? <Link to='/admin'><button>Admin</button></Link> : ''} */}
          <Link to='/user'><button>Profile</button></Link>
          <Link to='/login'><button>{signInOrOut}</button></Link>
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
          <Route exact path='/login' render={() =>
            <Login onSignIn={this.handleSignIn} onSignOut={this.handleSignOut}/>} />
          <Route path='/faq' component={Faq} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/review-list' component={ReviewList} />
          <PrivateRoute exact path='/user' uid={this.state.uid} component={User}/>
          {/* <PrivateRoute exact path='/user/quiz' uid={this.state.uid} component={Quiz} /> */}
          <Route exact path='/user/quiz' uid={this.state.uid} component={Quiz} />
          <Route exact path='/user/review' render={() =>
            <WriteReview />} />
          <Route exact path='/admin' render={() =>
            <Admin Quizs={this.state.QuizsById} onSongUpload={this.handleSongUpload} />} />
          <Route exact path='/admin/search' render={() =>
            <AdminSearch />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
