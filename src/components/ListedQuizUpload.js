import React from 'react';
import { firebase } from './../store';

class ListedQuizUpload extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      file: null,
      progressPercent: 0
    };
  };

  onFileSelect = (event) => {
    console.log("onFileSelect");
    event.target.files[0]
    && this.setState({
        file: event.target.files[0]
      });
    console.log(event.target.files[0]);
	};

  onUploadSong = async (quiz) => {
    let newSongs = quiz.data.songs || [];
    this.state.file.name && newSongs.push(this.state.file.name);
		await quiz.update({
			songs: newSongs,
		});

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
      () => {console.log('Upload Complete');}
      );
	};

  render() {
    return (
      <form>
        <input type="file" onChange={this.onFileSelect} />
        <p>Upload: {this.state.progressPercent}%</p>
        <p className="admin-upload-label">UPLOAD SONG--></p>
        <button onClick={() => this.onUploadSong(this.props.quiz)}>Upload Song</button>
      </form>
    );
  }
}

export default ListedQuizUpload;
