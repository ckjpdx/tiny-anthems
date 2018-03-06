import React from 'react';
import './styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Faq from './Faq';
import Portfolio from './Portfolio';
import ReviewList from './ReviewList';
import Welcome from './Welcome';
import Admin from './Admin';
import AdminSearch from './AdminSearch';
import WriteReview from './WriteReview';
import Questionnaire from './Questionnaire';
import ListedQuestionnaire from './ListedQuestionnaire';
import Error404 from './Error404';
import User from './User';
import { Switch, Route, Link } from 'react-router-dom';
import mike from './../assets/img/mike.gif';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userAccount: {
        questionnaireIds: []
      },
      questionnairesById: {

      },
      songsById: {

      }
    };
    this.handleSignInButton = this.handleSignInButton.bind(this);
    this.handleAddNewQuestionnaire = this.handleAddNewQuestionnaire.bind(this);
    this.handleSongUpload = this.handleSongUpload.bind(this);
  }

  componentDidMount() {
    this.handleFBLogin();
  }

  handleFBLogin() {
    console.log(window);
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '202716210312589',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.12'
      });

      window.FB.Event.subscribe('auth.statusChange', (response) => {
        if (response.authResponse) {
          this.updateLoggedInState(response)
        } else {
          this.updateLoggedInState()
        }
      });
    }.bind(this);

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  handleSignInButton(){
    if (this.state.userAccount.isUserSignedIn === false){
      const userName = prompt("Enter your name");
      const newUserAccount = Object.assign({}, this.state.userAccount, {isUserSignedIn: true, signInButtonText: 'Sign Out', userName: userName});
      this.setState({userAccount: newUserAccount});
    } else {
      const newUserAccount = Object.assign({}, this.state.userAccount, {isUserSignedIn: false, signInButtonText: 'Sign In'});
      this.setState({userAccount: newUserAccount});
    }
  }
  handleAddNewQuestionnaire(newQuiz){
    console.log(this.state);
    console.log(this.state.userAccount.questionnaireIds);
    const newQuestionnairesById = Object.assign({}, this.state.questionnairesById, {[newQuiz.id]: newQuiz});
    this.setState({questionnairesById: newQuestionnairesById});
    const newQuestionnaireIds = this.state.userAccount.questionnaireIds;
    newQuestionnaireIds.push(newQuiz.id);
    const newUserAccount = Object.assign({}, this.state.userAccount, {questionnaireIds: newQuestionnaireIds});
    this.setState({userAccount: newUserAccount});
  }
  handleSongUpload(newSong){
    const newSongsById = Object.assign({}, this.state.songsById, {[newSong.id]: newSong});
    this.setState({songsById: newSongsById});
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <div id="sign-in-links">
          <Link to='/user'><button>Profile</button></Link>
        </div>
        <img src={mike} alt="cartoon of mike throwing up musical notes" className="mike" />
        <h1 className="title">Tiny Anthems</h1>
        <Link className="App-main-links" to='/'>Welcome</Link>
        <Link className="App-main-links" to='/faq'>FAQ</Link>
        <Link className="App-main-links" to='/portfolio'>Portfolio</Link>
        <Link className="App-main-links" to='/review-list'>Reviews</Link>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/faq' component={Faq} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/review-list' component={ReviewList} />
          <Route exact path='/user' render={() =>
            <User userAccount={this.state.userAccount}/>} />
          <Route exact path='/user/questionnaire' render={() =>
            <Questionnaire onQuestionnaireFormSubmit={this.handleAddNewQuestionnaire}/>} />
          <Route exact path='/user/review' render={() =>
            <WriteReview />} />
          <Route exact path='/admin' render={() =>
            <Admin questionnaires={this.state.questionnairesById} onSongUpload={this.handleSongUpload} />} />
          <Route exact path='/admin/search' render={() =>
            <AdminSearch />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
