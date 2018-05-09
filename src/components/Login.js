import React from 'react';
import { observer } from 'mobx-react';
import { firebase } from './../store';
import { usersCollection, userDoc } from './../store';
import { initFirestorter, Collection, Document } from 'firestorter';

const provider = new firebase.auth.GoogleAuthProvider();

const Login = observer(class Login extends React.Component {
  state = {
    auth: null
  }

  doTheTest(){
    console.log('TESTING...');
    userDoc.path = `users/123`;
    console.log(userDoc);
    console.log(userDoc.data);
    console.log(userDoc.id);
    console.log(userDoc.uid);
  }

  signIn = () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log(result.user);
      userDoc.path = `users/${result.user.uid}`;
      console.log(userDoc);
      this.props.onSignIn(result.user);
      console.log();
    }).catch((error) => {
      console.error(error);
    });
  };

  signOut = () => {
    console.log('Signed Out');
    firebase.auth().signOut().then(() => {
      this.props.onSignOut('sign out')
    }).catch((error) => {
      console.error(error);
    });
  };

  render(){
    const { docs, query } = usersCollection;
    const testDoc = new Document('users/123');
    const childrenOfTheWorld = docs.map((doc) => <p key={doc.id}>doc.id:{doc.id}<br/>doc.data.uid: {doc.data.uid}</p>);
    return (
      <div>
        <p>ID: {testDoc.id}</p>
        <p>{testDoc.data.uid}</p>
        <p>{testDoc.data.uid}</p>
        <p>{userDoc.data.uid}</p>
        <p>PATH: {userDoc.path}</p>
        {childrenOfTheWorld}
        <button onClick={this.doTheTest}>TEST</button>
        <button onClick={this.signIn}>SIGN IN</button>
        <button onClick={this.signOut}>SIGN OUT</button>
      </div>
    );
  }
});

export default Login;
