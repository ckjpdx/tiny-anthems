import React from 'react';
import { observer } from 'mobx-react';
import { firebase } from './../store';
import { usersCollection } from './../store';
import { initFirestorter, Collection, Document } from 'firestorter';

const provider = new firebase.auth.GoogleAuthProvider();

const Login = observer(class Login extends React.Component {
  state = {}

  signIn = async () => {
    console.log('sign in');
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.props.onSignIn(result.user);
    }).catch((error) => {
      console.error(error);
    });
  };

  signOut = () => {
    console.log('Signed Out');
    firebase.auth().signOut().then(() => {
      this.props.onSignOut()
    }).catch((error) => {
      console.error(error);
    });
  };

  doTest = () => {
    usersCollection.query = usersCollection.ref.where('uid', '==', '12345');
  };

  render(){
    const { docs } = usersCollection;
    const userChildren = docs.map((user) => <h1 key={user.id} >{user.id}</h1>);
    return (
      <div>
        <button onClick={this.signIn}>SIGN IN</button>
        <button onClick={this.signOut}>SIGN OUT</button>
        <button onClick={this.doTest}>TEST</button>
        {userChildren}
      </div>
    );
  }
});

export default Login;
