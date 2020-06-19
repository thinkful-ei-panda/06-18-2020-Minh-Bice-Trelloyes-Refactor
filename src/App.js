import React from 'react';
import { STORE } from './store'
import { List } from './List';
import './App.css';

export default class App extends React.Component {

	state = { STORE };

	addCard = ( card, id ) => {

		let listUpdate = this.state.STORE.lists.find ( list => list.id === id );

		listUpdate.cardIds = [ ...listUpdate.cardIds, card.id ];

		let newLists = this.state.STORE.lists;

		let newAllCards = { ...this.state.STORE.allCards };
		
		newAllCards[ card.id ] = card;

		this.setState ({ STORE: { lists: newLists, allCards: newAllCards }});
	
	};
	
	deleteCard = ( listNumber, cardNumber, cardId ) => {
		
		let newLists = this.state.STORE.lists;

		let cardIdsUpdate = newLists.find ( list => parseInt ( list.id ) === ( listNumber + 1 ) )

		cardIdsUpdate.cardIds.splice ( cardNumber, 1 );

		newLists[ listNumber ].cardIds = [ ...cardIdsUpdate.cardIds ];
		
		let newAllCards = { ...this.state.STORE.allCards };

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
	
						<List deleteCard = { this.deleteCard } addCard = { this.addCard } listNumber = { index } list = { list } allCards = { this.state.STORE.allCards } />
					
					))}

				</main>

			</div>

		)

	};

}