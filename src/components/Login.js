import React from 'react';
import { firebase } from './../store';

const provider = new firebase.auth.GoogleAuthProvider();

const Login = (props) => {
  const signIn = () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log(result.user);
      props.onSignUser(result.user);
    }).catch((error) => {
      console.error(error);
    });
  };

  const signOut = () => {
    console.log('Signed Out');
    firebase.auth().signOut().then(() => {
      props.onSignUser('sign out')
    }).catch((error) => {
      console.error(error);
    });
  };

    return (
      <div>
        <button onClick={signIn}>SIGN IN</button>
        <button onClick={signOut}>SIGN OUT</button>
      </div>
    );
};

export default Login;
