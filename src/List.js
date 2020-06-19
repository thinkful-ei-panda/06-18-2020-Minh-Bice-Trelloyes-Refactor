import React from "react";
import { Cards } from "./Card";
import './List.css';

export class List extends React.Component {
	
	render () {

		return this.props.lists.map ( ( list, index ) => (
			
			<section className="List">
				
				<header className="List-header">
				
					<h2>{ list.header }</h2>

				</header>

				<div className="List-cards">
					
						<Cards cards = { this.props.allCards } cardIds = { list.cardIds } />

						<button type="button" className="List-add-button">
						
							+ Add Random Card

						</button>

				</div>

			</section>

		))
		
	}

}