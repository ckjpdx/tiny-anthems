import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { allQuizzesCollection, quizzesCollection, settingsDoc } from './../store';
import ProgressVommy from './common/ProgressVommy';
import ListedQuiz from './ListedQuiz';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons'

const Admin = observer(class Admin extends Component {
	constructor(props) {
		super(props);
		quizzesCollection.query = quizzesCollection.ref.where('pending', '==', true);
		allQuizzesCollection.query = allQuizzesCollection.ref.where('pending', '==', true);

		this.state = {
			filterPending: true,
			newPrices: null
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
		const wait = settingsDoc.data.waitPerSong;
		settingsDoc.update({
	  	waitPerSong: wait + parseInt(e.target.value, 10)
		});
	}

	changePrices = (e) => {
		if (e.target.value !== "") {
			const arr = e.target.value.match(/\d+/gm);
			if (arr) {
				const newPriceArr = arr.map(price => Number(price));
				this.setState({newPrices: newPriceArr});
			}
		} else {
			this.setState({newPrices: null});
		}
	}

	updatePrices = () => {
		settingsDoc.update({
			prices: this.state.newPrices
		});
		this.setState({newPrices: null});
	}

	render() {
		const { docs } = quizzesCollection;
		const listedQuizzes = docs.map((quiz) => <ListedQuiz key={quiz.id} quiz={quiz} />);
		const perSongWait = settingsDoc.data.waitPerSong;
		const currentWaitTime = allQuizzesCollection.docs.length * settingsDoc.data.waitPerSong;
		const prices = settingsDoc.data.prices;
		const nPrices = this.state.newPrices;

		return (
			<div className="Admin">
  			<h1><FontAwesomeIcon icon={faCrown} /> ADMIN <FontAwesomeIcon icon={faCrown} /></h1>
				{quizzesCollection.fetching ? <ProgressVommy /> :
				<div>
					<label>Wait: {perSongWait} x pending = {currentWaitTime} days </label>
					<button onClick={this.changeWait} value="1">+</button>
					<button onClick={this.changeWait} value="-1">-</button>
					<p className="subtext">Days wait per song x pending songs = total wait time</p>
					<div>
						<label>Prices: {prices && prices.join(", ")} </label>
						{nPrices && <label style={{color: 'red'}}>New: {nPrices.join(", ")}</label>}
						<br/>
						<input onChange={this.changePrices}/>
						{nPrices && <button onClick={this.updatePrices}>Update</button>}
						<p className="subtext">New prices separated by commas: 50, 100, 200</p>
					</div>
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
