import React, { Component } from 'react';

export default class Counter extends Component{

	state = {

		current: 0
	}

	static defaultProps = {

		name: "Hello Counter"
	}

	componentDidMount(){

		setInterval( () => {

			this.setState({

				current: this.state.current + 1
			})
		}, 1000 )
	}

	render(){

		return ( <div>{this.props.name} {this.state.current}</div> );
	}
}