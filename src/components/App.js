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

class App extends React.Component {
    state = {
      userState: {
        uid: null,
        isAdmin: false
      },
    };


  handleSongUpload(newSong){
    const newSongsById = Object.assign({}, this.state.songsById, {[newSong.id]: newSong});
    this.setState({songsById: newSongsById});
    console.log(this.state);
  }

  handleSignIn = async (auth = null) => {
    // const { docs, query } = usersCollection;
    // // look for exisiting user
    // const user = docs.filter(user => user.uid === auth.uid)[0];
    // console.log(user);
    // if (user) { // sign in existing user
    //   console.log('EXISTING USER');
    //   this.setState({
    //     user: user
    //   });
    // } else if (auth) { // create new user
    //   console.log('CREATE USER');
    //   this.setState({
    //     user: {
    //       uid: auth.uid,
    //     }
    //   });
    //   const addUserDoc = await new Document(`users/${auth.uid}`);
    //   addUserDoc.set({
    //     uid: auth.uid,
    //     isAdmin: false,
    //     name: auth.displayName
    //   });
    // } // if auth is null, logout
  }
  handleSignOut = async () => {
      console.log('LOG OUT USER');
      this.setState({
        user: {
          isAdmin: false},
        auth: null
      });
      console.log(this.state);
    }


  render() {
    const signInOrOut = this.state.auth ? 'Sign Out' : 'Sign In';
    console.log(this.state.userState.isAdmin);
    const isUserAdmin = this.state.userState.isAdmin;
    return (
      <div className="App">
        <div id="App-profile-button">
          <p style={{fontFamily: 'monospace'}}>User: {this.state.auth && this.state.auth.displayName}</p>
          {isUserAdmin ? <Link to='/admin'><button>Admin</button></Link> : ''}
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
          <PrivateRoute path='/portfolio' component={Portfolio} auth={this.state.auth}/>
          <Route path='/review-list' component={ReviewList} />
          <Route exact path='/user' render={() =>
            <User userAccount={this.state.userAccount}/>} />
          <Route exact path='/user/quiz' render={() =>
            <Quiz onQuizFormSubmit={this.handleAddNewQuiz} userId={this.state.userAccount.userId}/>} />
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
