import React from 'react';
import { STORE } from './store'
import { List } from './List';
import './App.css';

export default class App extends React.Component {

	state = { STORE };

	addCard = ( card, id ) => {

		let listUpdate = this.state.STORE.lists.find ( list => list.id === id );

		listUpdate.cardIds = [ ...listUpdate.cardIds, card.id ];

		let newLists = [ ...this.state.STORE.lists, listUpdate ];

		let newAllCards = { ...this.state.STORE.allCards };
		
		newAllCards[ card.id ] = card;

		this.setState ({ STORE: { lists: newLists, allCards: newAllCards }});
	
	};
	
	render() {

		return (

			<div className="App">

				<header className="App-header">

					<h1>Trelloyes!</h1>

				</header>
				 
				<main>
					
					{ this.state.STORE.lists.map ( ( list, index ) => (
	
						<List addCard = { this.addCard } list = { list } allCards = { this.state.STORE.allCards } />
					
					))}

				</main>

			</div>

		)

	}

}