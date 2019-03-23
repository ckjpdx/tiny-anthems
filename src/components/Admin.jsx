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

	tickUp = (e) => {
		console.log(e.target.value);
		const wait = settingsDoc.data.waitPerSong;
		settingsDoc.update({
	  	waitPerSong: wait + parseInt(e.target.value)
		});
	}

	render() {
		const { docs } = quizzesCollection;
		const listedQuizzes = docs.map((quiz) => <ListedQuiz key={quiz.id} quiz={quiz} />);
		const { fetching } = quizzesCollection;
		const wait = settingsDoc.data.waitPerSong;

		return (
			<div className="Admin">
  			<h2>Immortalization Applications</h2>
				<label>Days per song: {wait} </label><button onClick={this.tickUp} value="1">+</button><button onClick={this.tickUp} value="-1">-</button>
				<div style={{margin: 10}}>
					<label>Filter for:</label>
					<input type="checkbox" checked={this.state.filterPending} onChange={this.changeFilterPending.bind(this)}/><label>Pending</label>
				</div>
				{fetching ? <ProgressVommy /> : listedQuizzes}
			</div>
		);
	}
});

export default Admin;
