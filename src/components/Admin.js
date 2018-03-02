import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Admin.css';

function Admin(props){
  console.log(props);
  let quizList = <p>loading</p>;
  if (Object.keys(props.questionnaires).length > 0) {
    console.log('if!', Object.keys(props.questionnaires).length);
    Object.keys(props.questionnaires).map((quizId) => {
      console.log(props.questionnaires, quizId);
      let quiz = props.questionnaires[quizId];
      quizList =
      <div>
        <p>{quiz.name}</p>
      </div>;
    })
  } else {
    console.log('else!', Object.keys(props.questionnaires).length);
    quizList = <p>NO QUESTIONNAIRES</p>;
  }
  return (
    <div>
      <h1>ADMIN</h1>
      <Link to='/admin/search'>
        <button>Search Database</button>
      </Link>
      <h2>Questionnaires</h2>
      {quizList}
    </div>
  );
}

export default Admin;

/*
{ <h3>User123</h3>
<div>
  <p className="admin-upload-label">UPLOAD SONG--></p>
  <input className="admin-upload-input" type="file"/>
</div>
<p>Q: Answer</p>
<p>Q: Answer</p>
<p>Q: Answer</p>  }
*/
