import React from 'react';

const Button = (props) => <button onClick={props.handler}>{props.text}</button>
const TextField = () => <input></input>
const Label = (props) => <span>{props.text}</span>

const containerStyle ={
  border: '1px solid black'
};
const Container = () => {
  return (
    <div className={containerStyle}>
      <Button />
      <Label />
    </div>
  );
}

const Container2 = () => {
  return (
    <div>
      <TextField />
      <Button />
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>hello ziom</h1>
      <Container />
      <Container2 />
    </div>
  );
}

export default App;
