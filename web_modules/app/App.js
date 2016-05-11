import React, { Component } from 'react';

import Lists from 'htmlElements/Lists';

const artists = [
	{name: "Mike Portnoy"},
	{name: "Alex Rudinger"},
	{name: "Casey Cooper"},
	{name: "Joey Jordison"}
]

const kinds = {

	alternative: {name: "alternative"},
	metal: {name: "metal"},
	rock: {name: "rock"},
	pop: {name: "pop"}
}

export default class App extends Component {

	state = {

		artists : []	
	}
  	
  	componentDidMount(){

  		fetch( "https://api.spotify.com/v1/search?query=Bob*&offset=0&limit=10&type=artist" ).then((response)=>{

			response.json().then((data)=>{

				if( !data.error ){

					this.setState({ artists : data.artists.items });
				}
			})
		});
	}

  	render() {
  		return (
    		<div>

    			<Lists items={artists} />
				<Lists items={ Object.keys(kinds).map((k) => {return kinds[k]}) } />
      		</div>
    	);
  	}
}
