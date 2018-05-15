# Tiny Anthems
## Songs about you
*by Chris Knight Johnson*
### [View App Planning Repo](https://github.com/ckjpdx/tiny-anthems-planning)

## Description
This React web app was created for local Portland musician Mike Long. Using Google Web Services, visitors in need of a personalized song about their life, or in need of a song to serenade a loved one, can fill out a questionnaire that will be saved in Google's cutting edge Firestore database. The musician/minstrel can then sign in as an admin to retrieve the questionnaires for direction in song creation, and then post his client's completed song on Google Storage for download.

This web app allows:

...a visiting user to:
* read information about the musician's service
* login with a Google account
* fill out a questionnaire for themselves or another person to receive custom song
* retrieve song from their profile once completed and uploaded by musician (admin)

...the musician (admin) to:
* login to see pending questionnaires
* upload a song file to that specific questionnaire for client retrieval


## Technology
* Facebook [create-react-app](https://github.com/facebook/create-react-app)
* ~~Material UI~~ not yet implemented
* Google [SDK](https://cloud.google.com/sdk)
* Google [Cloud Storage](https://cloud.google.com/)
* Google [Firestore Database](https://firebase.google.com/docs/firestore/)
* Google [Firebase Authentication](https://firebase.google.com/docs/auth/)
* [Firestorter](https://github.com/IjzerenHein/firestorter), an incredible Firestore reference and live-update library
* [MobX](https://mobx.js.org/index.html), state management and Observables for use with Firestorter
* [js-file-download](https://www.npmjs.com/package/js-file-download), library for blob downloading thru browsers to local drive

# Progress
### Authentication
- [x] Authenticate users with Google sign in
- [x] Use PrivateRoute function to restrict access to unlogged users
- [ ] Use AdminRoute to restrict admin area
- [ ] React Context used for auth
- [ ] Switch from PrivateRoute & AdminRoute to Auth HOC

### Database & Storage
- [x] Submit questionnaire for song creation
- [x] Display list of questionnaires
- [x] Client can view their completed songs
- [x] Client can download their songs
- [x] Google Cloud Storage is used to store mp3 files
- [x] Database references saved song files as nested array in each quiz object
- [x] Admin can delete songs from questionnaires (removes reference from database and song file from storage)
- [x] Admin can sort pending questionnaires with collection queries
- [ ] Mark pending questionnaires as 'false' (complete)
- [ ] Automatically email client to notify of song completion
- [ ] Google Cloud Storage is used to store static site files for hosting

### UX & Interface
- [x] Display demo songs to play on portfolio page via Soundcloud imbeds
- [ ] Redesign site styles
- [ ] Two questionnaires: for either the user or for someone the user knows
- [ ] Material UI styles (is installed, but not yet implemented)

### Bugs
* Clicking upload on the admin page when there isn't a local file selected will crash the app

# Install
1. git clone
1. npm install
1. configure firebase via firebase web console
1. generate your own apikey on firebase console
1. place new api key in .env file in top directory as REACT_APP_APIKEY="AIexample123456789"
1. npm start
1. view at localhost:3000

# Structure
![components tree](tiny-anthems-components4.png)
![interface tree](tiny-anthems-interface3.png)

# Notes (misc & unorganized)

### firestorter & firebase connections
mapping out documents in a collection:
```javascript
const { docs, query } = someCollection;
const children = docs.map((doc) => <p key={doc.id}>doc.id is {doc.id}<br/>doc.data.name is {doc.data.name}</p>);
```
firestorter document properties
* doc.path
* doc.id
* doc.data.property

userDoc.fetch().then(({data}) => console.log(data.snapshot));

firebase.auth result
* signInWithPopup returns result
  * (result) => result.user.uid

### firestore (vanilla)
const docRef = firebase.firestore().collection("users").doc("12345");
docRef.get().then(doc => console.log(doc.data()))

### two way data binding
```javascript
onTextChange = (event) => {
  this.setState({
    songTitle: event.target.value
  });
};

<label>songTitle:</label>
<input type="text" onChange={this.onTextChange} value={this.state.songTitle || ''} />
```
