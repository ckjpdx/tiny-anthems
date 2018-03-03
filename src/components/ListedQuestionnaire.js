import React from 'react';
import { v4 } from 'uuid';
import './styles/ListedQuestionnaire.css';

function ListedQuestionnaire(props){
  console.log(props);
  let _title = null;
  let _url = null;
  function handleSongUpload(){
    console.log(props);
    const newSong = {
      id: v4(),
      title: _title.value,
      url: _url.value,
      quizId: props.quiz.id
    }
    props.onSongUpload(newSong);
  }
  return (
    <div className="ListedQuestionnaire-div">
      <h3>{props.quiz.name}</h3>
      <div>
        <label>Title:</label>
        <input ref={(input) => {_title = input;}} />
        <label>URL:</label>
        <input ref={(input) => {_url = input;}} />
        <p className="admin-upload-label">UPLOAD SONG--></p>
        <button onClick={handleSongUpload}>Upload Song</button>
      </div>
      <p>{props.quiz.dob}</p>
      <p>{props.quiz.anythingElse}</p>
    </div>
  );
}

export default ListedQuestionnaire;
