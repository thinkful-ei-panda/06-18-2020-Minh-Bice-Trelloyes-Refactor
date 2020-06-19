import React from "react";
import './Card.css';
export class Cards extends React.Component {
	
	handleButtonClick = ( listNumber, cardNumber, cardId ) => {
		
		this.props.deleteCard ( listNumber, cardNumber, cardId );
	
	};
	
	render () {
		
		return this.props.cardIds.map ( ( card, index ) => (

			<div className="Card">

				<button key = { index } onClick = { () => this.handleButtonClick ( this.props.listNumber, index, card ) }>delete</button>
					
				<h3>
					
					{ this.props.cards[ card ].title }
					
				</h3>

				<p>

					{ this.props.cards[ card ].content }

				</p>
				
			</div>

		))
	
	}

}