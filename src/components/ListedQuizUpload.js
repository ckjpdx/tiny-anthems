import React from 'react';
import { firebase } from './../store';

class ListedQuizUpload extends React.Component {

  state = {
    title: null,
    file: null,
    progressPercent: 0
  };

  onTextChange = (event) => {
		this.setState({
			title: event.target.value
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
		const { quiz } = this.props;
		await quiz.update({
			title: this.state.title
		});
    const storageRef = firebase.storage().ref(`songs/${this.state.file.name}`);
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

  componentDidMount(){
    const { title, url } = this.props.quiz.data;
    this.setState({
      title,
      url
    });
  }

  render() {
    return (
      <form>
        <label>Title:</label>
        <input type="text" onChange={this.onTextChange} value={this.state.title || ''} />
        <input type="file" onChange={this.onFileSelect} />
        <p>Upload: {this.state.progressPercent}%</p>
        <p className="admin-upload-label">UPLOAD SONG--></p>
        <button onClick={this.onUploadSong}>Upload Song</button>
      </form>
    );
  }
}

export default ListedQuizUpload;
