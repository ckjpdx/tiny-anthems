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
import Error404 from './Error404';
import User from './User';
import { Switch, Route, Link } from 'react-router-dom';
import mike from './../assets/img/mike.gif';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userAccount: {
        isUserSignedIn: false,
        signInButtonText: 'Sign In',
        userName: null,
        questionnaireIds: []
      },
      questionnairesById: {

      },
      songsById: {

      }
    };
    this.handleSignInButton = this.handleSignInButton.bind(this);
    this.handleAddNewQuestionnaire = this.handleAddNewQuestionnaire.bind(this);
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
  handleAddNewQuestionnaire(newQuestionnaire){
    const newQuestionnairesById = Object.assign({}, this.state.questionnairesById, {[newQuestionnaire.id]: newQuestionnaire});
    this.setState({questionnairesById: newQuestionnairesById});
    console.log(this.state);
    const newQuestionnaireIds = this.state.userAccount.questionnaireIds.push(newQuestionnaire.id);
    const newUserAccount = Object.assign({}, this.state.userAccount, {questionnairesIds: newQuestionnaireIds});
    this.setState({userAccount: newUserAccount});
    console.log(this.state);
  }
  render() {
    let userSignInLinks = null;
    let userName = this.state.userAccount.userName
    if (this.state.userAccount.isUserSignedIn){
      userSignInLinks = <div id="sign-in-links">
        <Link to='/user'><button>{userName}'s Profile</button></Link>
      </div>
    }
    return (
      <div className="App">
        <button id="sign-in" onClick={this.handleSignInButton}>{this.state.userAccount.signInButtonText}</button>
        {userSignInLinks}
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
            <Admin questionnaires={this.state.questionnairesById} />} />
          <Route exact path='/admin/search' render={() =>
            <AdminSearch />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
