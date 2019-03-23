import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection, settingsDoc } from './../store';
import ProgressVommy from './common/ProgressVommy';
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

	changeWait = (e) => {
		console.log(e.target.value);
		const wait = settingsDoc.data.waitPerSong;
		settingsDoc.update({
	  	waitPerSong: wait + parseInt(e.target.value)
		});
	}

	render() {
		const { docs } = quizzesCollection;
		const listedQuizzes = docs.map((quiz) => <ListedQuiz key={quiz.id} quiz={quiz} />);
		const wait = settingsDoc.data.waitPerSong;

		return (
			<div className="Admin">
  			<h1>ADMIN</h1>
				{quizzesCollection.fetching ? <ProgressVommy /> :
				<div>
					<label>Wait factor: X{wait} (days) </label><button onClick={this.changeWait} value="1">+</button><button onClick={this.changeWait} value="-1">-</button>
					<div style={{margin: 10}}>
						<label>Filter for:</label>
						<input type="checkbox" checked={this.state.filterPending} onChange={this.changeFilterPending.bind(this)}/><label>Pending</label>
					</div>
					{listedQuizzes}
				</div>
				}
			</div>
		);
	}
});

export default Admin;
