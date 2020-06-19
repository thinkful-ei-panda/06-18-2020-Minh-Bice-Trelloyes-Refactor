import React from "react";
import './Card.css';
export class Cards extends React.Component {

	render () {

		return this.props.cardIds.map ( ( card, index ) => (

			<div className="Card">

				<button key={ index } onClick={ () => this.handleButtonClick ( index ) }>delete</button>
					
				<h3>
					
					{ this.props.cards[card].title }
					
				</h3>

				<p>

					{ this.props.cards[card].content }

				</p>
				
			</div>

		))
	
	}

}