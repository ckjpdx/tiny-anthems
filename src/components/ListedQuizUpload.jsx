import React from 'react';
import { firebase } from './../store';
import './styles/ListedQuizUpload.css';

class ListedQuizUpload extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      file: null,
      progressPercent: 0
    };
  };

  onFileSelect = (event) => {
    event.target.files[0]
      ? this.setState({file: event.target.files[0]})
      : this.setState({file: null});
	};

  onUploadSong = (quiz) => {
    const songFileRef = `songs/${this.state.file.name}`;
    const storageRef = firebase.storage().ref(songFileRef);
    console.log(songFileRef, storageRef);
    const task = storageRef.put(this.state.file);
    task.on(
      'state_changed',
      (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          progressPercent: percentage
        });
        console.log(this.state.progressPercent);
      },
      (err) => {console.error(err);},
      async () => {
        let newSongs = quiz.data.songs || [];
        this.state.file.name && newSongs.push(this.state.file.name);
        await quiz.update({
          songs: newSongs,
        });
      }
    );
  };

  render() {
    return (
      <form className="ListedQuizUpload">
        <input type="file" onChange={this.onFileSelect} />
        <p>Upload: {this.state.progressPercent}%</p>
        <p className="admin-upload-label">UPLOAD SONG--></p>
        <button type="button" onClick={() => this.state.file && this.onUploadSong(this.props.quiz)}>Upload Song</button>
      </form>
    );
  }
}

export default ListedQuizUpload;
