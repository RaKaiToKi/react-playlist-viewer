import React, { Component } from 'react';

export default class Input extends Component{

	static propTypes = {

		onChange: React.PropTypes.func.isRequired
	}

	render(){

		return ( 
			<input type="text" placeholder="Recherche" onChange={ this.props.onChange } />
		);
	}
}