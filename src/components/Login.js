import React from 'react';
import { firebase } from './../store';

const provider = new firebase.auth.GoogleAuthProvider();

const Login = (props) => {
  console.log(props.test123);
  const signIn = () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log(result.user);
      props.onSignOn(result.uid);
    }).catch((error) => {
      console.error(error);
    });
  };

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      console.log('Signed Out');
    }).catch((error) => {
      console.error(error);
    });
  };

    return (
      <div>
        {props.test123}
        <button onClick={signIn}>SIGN IN</button>
        <button onClick={signOut}>SIGN OUT</button>
      </div>
    );
};

export default Login;
