import React, { Component } from 'react';
import { Cards } from "./Card";
import './List.css';

export class List extends React.Component {

	state = { title: '', content: '' };

	handleChange = ( e ) => {
	
		if ( e.target.id === 'title' ) this.setState({ title: e.target.value });
		
		else this.setState({ content: e.target.value });

	}

	handleSubmit = ( e ) => {
		
		e.preventDefault ();
		
		let rando = Math.floor(Math.random() * Math.floor(100000));

		this.props.addCard ({
			
			//good for displaying card
			//id: this.props.list.cardIds.length + 1,

			id: rando,

			title: this.state.title,

			content: this.state.content,

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
					
					<Cards cards = { this.props.allCards } cardIds = { this.props.list.cardIds } />
			
					<form onSubmit = { this.handleSubmit }>
	
						<input
    						type = 'text'
							id = 'title'
        					value = { this.state.title }
							onChange = { this.handleChange }
							placeholder = 'Enter your title here'
					    />
						<input
							type = 'text'
							id = 'content'
        					value = { this.state.content }
							onChange = { this.handleChange }
							placeholder = 'Enter your content here'
					    />
	
					    <input type='submit' className="List-add-button" value='Add Card' />
			
					</form>
			
				</div>

			</section>
		
		)

	}

}