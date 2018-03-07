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
import FacebookLogin from './FacebookLogin';
import Error404 from './Error404';
import User from './User';
import { Switch, Route, Link } from 'react-router-dom';
import mike from './../assets/img/mike.gif';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userAccount: {
        id: null,
        name: null,
        questionnaireIds: []
      },
      questionnairesById: {

      },
      songsById: {

      }
    };
    this.handleAddNewQuestionnaire = this.handleAddNewQuestionnaire.bind(this);
    this.handleSongUpload = this.handleSongUpload.bind(this);
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
  }
  handleFacebookLogin(id, name){
    const newUserAccount = Object.assign({}, this.state.userAccount, {id: id, name: name});
    this.setState({userAccount: newUserAccount});
    console.log(this.state);
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
          <Link to='/facebook-login'><button>Profile</button></Link>
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
          <Route exact path='/facebook-login' render={() =>
            <FacebookLogin onFacebookLogin={this.handleFacebookLogin} userAccount={this.state.userAccount}/>} />
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
