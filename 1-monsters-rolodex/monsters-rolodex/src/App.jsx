import React from 'react';
import MonsterList from './components/monster-list/MonsterList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  mapResponseToMonster = (v) => {
      return {name: v.name, email: v.email};
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const users = data.map(this.mapResponseToMonster);
        this.setState({monsters: users})
      });
  }

  render() {
    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        
        <MonsterList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
