import React, { Component } from 'react';

export default class KindsCell extends Component{

	static defaultProps = {

		nameKind: "Metalcore"
	}

	render(){

		return ( <div>{this.props.nameKind}</div> );
	}
}