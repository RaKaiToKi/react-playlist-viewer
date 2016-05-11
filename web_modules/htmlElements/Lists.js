import React, { Component } from 'react';
import Input from "Input";

export default class Lists extends Component{

	static defaultProps = {

		items: null
	}

	state = {

		inputValue : ""
	}

	inputChange = (event) => {

		this.setState({ inputValue : event.target.value });
	}

	render(){

		return ( 
			<div className="jList">
				<Input onChange={ this.inputChange } />
				<ol>
					{this.props.items && this.props.items.map((item) => {

	      				return (
	      					item.name && 
	      					item.name.toLowerCase().search(this.state.inputValue.toLowerCase()) != -1 && 
	      					<li className="jCell">{item.name}</li>
	      				)
	      			})}
				</ol>
			</div>
		);
	}
}