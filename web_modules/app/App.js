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
  render() {
    return (
    	<div>

    		<Lists items={artists} />
			<Lists items={ Object.keys(kinds).map((k) => {return kinds[k]}) } />
      	</div>
    );
  }
}
