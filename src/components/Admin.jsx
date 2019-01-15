import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import ListedQuiz from './ListedQuiz';
import './Admin.css';


const Admin = observer(class Admin extends Component {
	constructor(props) {
		super(props);
		quizzesCollection.query = quizzesCollection.ref.where('pending', '==', true);

		this.state = {
			filterPending: true
		};
	}

	changeFilterPending() {
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
		const { docs } = quizzesCollection;
		const quizChildren = docs.map((quiz) => <ListedQuiz key={quiz.id} quiz={quiz} />);
		// const { fetching } = quizzesCollection;

		return (
			<div className="Admin" style={{backgroundColor: '#e8dce1'}}>
        <h2>Immortalization Applications</h2>
				<p>These wretched mortals seek your divine melody, milord:</p>
				<div style={{margin: 10}}>
					<label>Filter for:</label>
					<input type="checkbox" checked={this.state.filterPending} onChange={this.changeFilterPending.bind(this)}/><label>Pending</label>
				</div>
				{quizChildren}
			</div>
		);
	}
});

export default Admin;
