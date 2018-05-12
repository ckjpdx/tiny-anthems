import React from 'react';
import { firebase } from './../store';

class ListedQuizUpload extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      songTitle: props.quiz.data.songTitle || '',
      songRef: props.quiz.data.songRef || '',
      file: '',
      progressPercent: 0
    };
    console.log(this.state);
  };

  onTextChange = (event) => {
		this.setState({
			songTitle: event.target.value
		});
	};

  onFileSelect = (event) => {
		console.log("onFileSelect");
    this.setState({
      file: event.target.files[0]
    });
    console.log(event.target.files[0]);
	};

  onUploadSong = async () => {
    const songFileRef = `songs/${this.state.file.name}`;
		const { quiz } = this.props;
		await quiz.update({
			songTitle: this.state.songTitle,
      songRef: songFileRef
		});
    const storageRef = firebase.storage().ref(songFileRef);
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
        <label>songTitle:</label>
        <input type="text" onChange={this.onTextChange} value={this.state.songTitle || ''} />
        <input type="file" onChange={this.onFileSelect} />
        <p>Upload: {this.state.progressPercent}%</p>
        <p className="admin-upload-label">UPLOAD SONG--></p>
        <button onClick={this.onUploadSong}>Upload Song</button>
      </form>
    );
  }
}

export default ListedQuizUpload;
