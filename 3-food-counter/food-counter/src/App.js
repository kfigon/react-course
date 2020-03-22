import React from 'react';
import './App.css';


  // todo: style
  // corner casy
  // ulamki w ilosciach

  // proporcje osobno 140g - 70 => 2

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: [
        { name: 'Kurczak', amount: 70 },
        { name: 'makaron', amount: 10 },
        { name: 'pies', amount: 20 },
      ],

      currentName: '',
      currentAmount: 0,
    }
  }

  calculateScaled = (food) => {
    const sum = this.state.foods
      .map(f => f.amount)
      .reduce((prev, cur) => prev + cur);

    return ((100*food.amount) / sum).toFixed(2);
  }


  nameTyped = (event) => {
    const v = event.target.value;
    if (v) {
      this.setState({ currentName: v });
    }
  }

  amountTyped = (event) => {
    const v = event.target.value;
    if (v) {
      this.setState({ currentAmount: parseInt(v) });
    }
  }

  addToFoods = () => {
    this.setState(prevState => {
      return {
        foods: prevState.foods.concat({ name: prevState.currentName, amount: prevState.currentAmount }),
        currentName: '',
        currentAmount: 0
      }
    }, () => console.log('after change', this.state));
  }

  removeItem = (idx) => {
    this.setState(prevState => {
      return {
        foods: prevState.foods.filter((el, curIdx) => curIdx !== idx)
      }
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.foods
              .map(f => {
                return `${f.name}, ${f.amount}g, scaled: ${this.calculateScaled(f)}`
              })
              .map((f, idx) => <li key={idx} onClick={()=>this.removeItem(idx)}>{f}</li>)
          }
        </ul>
        <input type="text" onChange={this.nameTyped} value={this.state.currentName} />
        <input type="number" onChange={this.amountTyped} value={this.state.currentAmount} />
        <button onClick={this.addToFoods}>Click to add!</button>
      </div>
    );
  }
}

export default App;
