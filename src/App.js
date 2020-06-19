import React from 'react';
import { STORE } from './store'
import { List } from './List';
import './App.css';

export default class App extends React.Component {

	state = { STORE };

	render() {

		return (

			<div className="App">

				<header className="App-header">

					<h1>Trelloyes!</h1>

				</header>
				 
				<main>
	
					<List lists = { this.state.STORE.lists } allCards = { this.state.STORE.allCards } />
	
				</main>

			</div>

		)

	}

}