import React from 'react';
import { Link } from 'react-router-dom';
import ListedQuestionnaire from './ListedQuestionnaire';
import './styles/Admin.css';

function Admin(props){
  return (
    <div>
      <h1>ADMIN</h1>
      <Link to='/admin/search'>
        <button>Search Database</button>
      </Link>
      <h2>Questionnaires</h2>
        {Object.keys(props.questionnaires).map((quizId) => {
          console.log(props.questionnaires, quizId);
          let quiz = props.questionnaires[quizId];
          return <ListedQuestionnaire quiz={quiz} onSongUpload={props.onSongUpload} key={quiz.id} />;
        })}
    </div>
  );
}

export default Admin;
