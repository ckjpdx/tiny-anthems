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

  render() {
    return (
      <React.Fragment>
        {this.props.appState.uid
        ? <button onClick={this.signOut}
          className={this.props.invertColors && "Login-invert-colors"}
          >Sign Out</button>
        : <button onClick={this.signIn}
          className={this.props.invertColors && "Login-invert-colors"}
          >Sign In</button>}
      </React.Fragment>
    );
  }
});

export default Login;
