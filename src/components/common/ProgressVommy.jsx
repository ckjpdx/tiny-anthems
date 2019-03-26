import React from 'react';
import vommy from './../../assets/img/mike.gif';
import './ProgressVommy.css';

function ProgressVommy(props){
  return (
    <div className="ProgressVommy">
      <img src={vommy} className="vommy" alt="in progress spinner" />
    </div>
  );
}

export default ProgressVommy;
