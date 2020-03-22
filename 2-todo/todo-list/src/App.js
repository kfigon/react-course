import React from 'react';
import './App.css';

const Element = props => <li className='element' onClick={() => props.removeTask(props.task)}>{props.task}</li>;

const List = (props) => {
  return (
    <ul>
      {props.tasks.map((theTask, idx) => <Element key={idx} task={theTask} id={idx} removeTask={props.removeTask} />)}
    </ul>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: ['asd', 'sad', 'three'],
      pendingText: ''
    }
  }

  // trzeba tutaj zmianic state na podstawie poprzedniego
  // this.state.tasks moze spowodowac wyscig, bo react lubi robic zmiany batchowo
  addTask = () => {
    this.setState(prevState => {
      const prevTasks = prevState.tasks;
      const pendingText = prevState.pendingText;
      return pendingText
        ? { tasks: prevTasks.concat(pendingText), pendingText: '' }
        : prevState;
    });
  }

  removeTask = (taskToRemove) => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(el => el !== taskToRemove)
      }
    });
  };

  dataTyped = (event) => {
    const v = event.target.value;
    this.setState({ pendingText: v });
  }

  render() {
    return (
      <div className="App">
        <h1>Yet another todo app</h1>
        <div>
          <input type="text" onChange={this.dataTyped} value={this.state.pendingText} />
          <div className='btn' onClick={this.addTask}>Add task</div>
        </div>
        <List tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
