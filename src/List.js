import React from "react";
import { Cards } from "./Card";
import './List.css';

export class List extends React.Component {

	state = { title: '', content: '' };

	handleSubmit = ( e ) => {
		
		e.preventDefault ();
		
		let rando = Math.floor(Math.random() * Math.floor(100000));

		this.props.addCard (

			{

				id: rando,
	
				title: `Random Card ${rando}`,
	
				content: 'lorem ipsum',
	
			},
		
			this.props.list.id
		
		);
	
		this.setState ({ text: '' });
	
	};

	render () {
		
		return (

			<section className="List">
				
				<header className="List-header">
				
					<h2>{ this.props.list.header }</h2>

				</header>

				<div className="List-cards">
					
					<Cards deleteCard = { this.props.deleteCard } listNumber = { this.props.listNumber } cards = { this.props.allCards } cardIds = { this.props.list.cardIds } />
			
					<form onSubmit = { this.handleSubmit }>
	
					    <input type='submit' className="List-add-button" value='+ Add Random Card' />
			
					</form>
			
				</div>

			</section>
		
		)

	}

}