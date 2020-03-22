import React from 'react';
import MonsterList from './components/monster-list/MonsterList';
import './App.css';
import SearchBox from './components/search-box/SearchBox';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filterText: ''
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
        this.setState({monsters:users})
      });
  }

  filterMonster = (event) => {
    const v = event.target.value || '';
    this.setState({filterText: v});
  }

  getFilteredMonsters() {
    const text = this.state.filterText;

    return this.state.monsters
      .filter(monster => monster.name.toLowerCase().includes(text));
  }

  render() {
    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        <SearchBox searchFunction={this.filterMonster} />
        <MonsterList  monsters={this.getFilteredMonsters()} />
      </div>
    );
  }
}

export default App;
