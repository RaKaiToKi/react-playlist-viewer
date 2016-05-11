import React, { Component } from 'react';

export default class ArtistCell extends Component{

	static defaultProps = {

		nameArtist: "Jimmy Orfao"
	}

	render(){

		return ( <div>{this.props.nameArtist}</div> );
	}
}