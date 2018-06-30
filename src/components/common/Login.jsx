import React from 'react';
import { observer } from 'mobx-react';
import { firebase } from './../../store';
import { initFirestorter, Collection, Document } from 'firestorter';

const provider = new firebase.auth.GoogleAuthProvider();

const Login = observer(class Login extends React.Component {
  constructor(props){
    super(props);
  }

  signIn = () => {
    console.log('signIn');
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return firebase.auth().signInWithPopup(provider)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  signOut = () => {
    console.log('signOut');
    firebase.auth().signOut()
      .catch((error) => {
        console.error(error);
      });
  };

  render(){
    let signUserButton;
    if (this.props.showLogout){
      signUserButton = this.props.appState.uid ? <button onClick={this.signOut}>Sign Out</button> : <button onClick={this.signIn}>Sign In</button>;
    } else {
      signUserButton = this.props.appState.uid ? null : <button onClick={this.signIn}>Sign In</button>;
    }
    return (
      <div>{signUserButton}</div>
    );
  }
});

export default Login;
