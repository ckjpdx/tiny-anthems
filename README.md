# Tiny Anthems
## Songs about you

*by Chris Knight Johnson*

## Description
Created for local Portland musician Mike Long. AWS services are used to gather questionnaires from customers in need of a personalized song about their life, allow the musician to retrieve the questionnaires for music making, and then post their song securely for downloading.

* [View App Planning Repo](https://github.com/ckjpdx/tiny-anthems-planning)

# Technology
* create-react-app
* ~~Material UI~~
* Google SDK
* Google Cloud Storage
* Google Firestore
* Google Firebase Authentication

# Install

# firestorter & firebase connections
mapping out documents in a collection:
```javascript
const { docs, query } = someCollection;
const children = docs.map((doc) => <p key={doc.id}>doc.id is {doc.id}<br/>doc.data.name is {doc.data.name}</p>);
```
firestorter document properties
* doc.path
* doc.id
* doc.data.property

firebase.auth result
* signInWithPopup returns result
  * (result) => result.user.uid

# Goals
- [ ] Material UI styles (is installed, but not yet implemented)
- [x] Display demo songs to play via portfolio
- [x] react-facebook npm is used to sign in users (may be removed)
- [ ] Google Cloud Storage is used to static site files and store mp3 files
- [ ] Google Firestore is used to put/get persistent state
- [ ] Google Firebase Authentication is used to securely sign in users/admin
- [ ] Database references
- [ ]

# Resources

# Structure
![components tree](tiny-anthems-components4.png)
![interface tree](tiny-anthems-interface3.png)
