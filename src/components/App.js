import React from 'react';
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
    user: 'test'
  };

  handleSongUpload(newSong){
    const newSongsById = Object.assign({}, this.state.songsById, {[newSong.id]: newSong});
    this.setState({songsById: newSongsById});
    console.log(this.state);
  }

  handleSignUser = (user = null) => {
    this.setState({
      user: user
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div id="App-profile-button">
          <Link to='/login'><button>Profile</button></Link>
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
            <Login onSignUser={this.handleSignUser}/>} />
          <Route path='/faq' component={Faq} />
          <PrivateRoute path='/portfolio' component={Portfolio} user={this.state.user}/>
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
