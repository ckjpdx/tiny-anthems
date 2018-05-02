import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import { Link } from 'react-router-dom';
import ListedQuiz from './ListedQuiz';
import './styles/Admin.css';

const Admin = observer(class Admin extends Component {
	state = {};

	render() {
		const { docs, query } = quizzesCollection;
		const quizChildren = docs.map((quiz) => <ListedQuiz key={quiz.id} quiz={quiz} />);
		const { fetching } = quizzesCollection;
		return (
			<div>
        <h2>Questionnaires</h2>
        {quizChildren}
			</div>
		);
	}
});

export default Admin;
