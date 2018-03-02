import React from 'react';

function ListedQuestionnaire(props){
  return (
    <div>
      <h3>{props.quiz.name}</h3>
      <div>
        <p className="admin-upload-label">UPLOAD SONG--></p>
        <input className="admin-upload-input" type="file"/>
      </div>
      <p>{props.quiz.dob}</p>
      <p>{props.quiz.anythingElse}</p>
    </div>
  );
}

export default ListedQuestionnaire;
