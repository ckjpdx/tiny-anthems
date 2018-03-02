import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Admin.css';

function Admin(){
  return (
    <div>
      <h1>ADMIN</h1>
      <Link to='/admin/search'>
        <button>Search Database</button>
      </Link>
      <h2>(Pending Questionnaires)</h2>
      <h3>User123</h3>
      <div>
        <p className="admin-upload-label">UPLOAD SONG--></p>
        <input className="admin-upload-input" type="file"/>
      </div>
      <p>Q: Answer</p>
      <p>Q: Answer</p>
      <p>Q: Answer</p>
    </div>
  );
}

export default Admin;
