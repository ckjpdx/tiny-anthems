import React from 'react';
import { observer } from 'mobx-react';
import { firebase } from './../store';
import { initFirestorter, Collection, Document } from 'firestorter';

const provider = new firebase.auth.GoogleAuthProvider();

const Login = observer(class Login extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  signIn = async () => {
    console.log('sign in');
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.props.onSignIn(result.user);
    }).catch((error) => {
      console.error(error);
    });
  };

  signOut = () => {
    console.log('sign out');
    firebase.auth().signOut().then(() => {
      this.props.onSignOut()
    }).catch((error) => {
      console.error(error);
    });
  };

  render(){
    console.log(this.props);
    const signUserButton = this.props.appState.uid ? <button onClick={this.signOut}>Sign Out</button> : <button onClick={this.signIn}>Sign In</button>;
    return (
      <div>{signUserButton}</div>
    );
  }
});

export default Login;
