import React, { Component } from 'react';
import Counter from 'Counter';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello React !
        <Counter name="MON SUPER NOM" />
        <Counter />
      </div>
    );
  }
}
