import "./App.css";

import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters : [],
      searchField: '',
    };
    console.log('Constructor')
    
  }
componentDidMount() {
  console.log('componentDidMount')
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((users) => 
    this.setState(
      () => {
        return {monsters: users}
      },
      () => console.log(this.state)
    )
    );
}
  
  render() {
    console.log('render');
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    
    return (
      <div className='App'>
        <input
        className ='Search-box'
        type='search'
        placeholder="Search monsters"
        onChange={ (event) => {
          console.log({startingArray : this.state.monsters});
          const searchField = event.target.value.toLowerCase();

          this.setState(
            () => {
              return {searchField}
            },
            () => console.log({endingArray : this.state.monsters})
          )
        }}
        />
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        })}
      </div>
    )
  }
}

export default App