import React from 'react';
import { observer } from 'mobx-react';
import { firebase } from './../../store';

const provider = new firebase.auth.GoogleAuthProvider();

const Login = observer(class Login extends React.Component {

  signIn = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return firebase.auth().signInWithPopup(provider)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  signOut = () => {
    firebase.auth().signOut()
      .catch((error) => {
        console.error(error);
      });
  };

  render(){
    let signUserButton;
    if (this.props.isVisible){
      signUserButton = this.props.appState.uid ? <button onClick={this.signOut}>Sign Out</button> : <button onClick={this.signIn}>Sign In</button>;
    } else {
      signUserButton = this.props.appState.uid ? null : <div style={{width: '100%', height: '100%'}} onClick={this.signIn} id="Login-player-login" role="button"></div>;
    }
    return signUserButton;
  }
});

export default Login;
