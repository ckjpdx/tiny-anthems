import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import { Link } from 'react-router-dom';
import ListedQuiz from './ListedQuiz';
import './styles/Admin.css';


const Admin = observer(class Admin extends Component {
	constructor(props) {
		super(props);
		quizzesCollection.query = quizzesCollection.ref.where('pending', '==', true);

		this.state = {
			filterPending: true
		};
	}

	handleChangeFilterPending() {
		this.setState(
			{filterPending: !this.state.filterPending},
			this.switchPendingQuery
		);
	}

	switchPendingQuery() {
		this.state.filterPending ? (
			quizzesCollection.query = quizzesCollection.ref.where('pending', '==', true)
		):(
			quizzesCollection.query = undefined
		)
	}

	render() {
		const { docs, query } = quizzesCollection;
		const quizChildren = docs.map((quiz) => <ListedQuiz key={quiz.id} quiz={quiz} />);
		const { fetching } = quizzesCollection;

		return (
			<div>
				<label>Filter by Pending</label>
				<input type="checkbox" checked={this.state.filterPending} onChange={this.handleChangeFilterPending.bind(this)}/>
        <h2>Questionnaires</h2>
        {quizChildren}
			</div>
		);
	}
});

export default Admin;
