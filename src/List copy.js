import React, { Component } from 'react';
import { Cards } from "./Card";
import './List.css';

export class List extends React.Component {

	state = { text: '' };

	handleChange = ( e ) => this.setState({ text: e.target.value });
	  
	handleSubmit = ( e ) => {
		
		e.preventDefault ();
		
		this.props.addCard ({
		
			id: this.props.lists.cardIds.length + 1,
		
		  	name: this.state.text,
		
			checked: false,
		
		});
	
		this.setState ({ text: '' });
	
	};

	render () {

		return this.props.lists.map ( ( list, index ) => (
			
			<section className="List">
				
				<header className="List-header">
				
					<h2>{ list.header }</h2>

				</header>

				<div className="List-cards">
					
						<Cards cards = { this.props.allCards } cardIds = { list.cardIds } />
			
						<form onSubmit = { this.handleSubmit }>
	
							<input
    							type='text'
        						value={ this.state.text }
							    onChange={ this.handleChange }
					        />
	
					        <input type='submit' className="List-add-button" value='Add Card' />
			
						</form>
			
				</div>

			</section>

		))
		
	}

}