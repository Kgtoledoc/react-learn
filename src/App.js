import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Timer = ({ currentValue, resetTimerFunction }) => {
  return (
    <div className="Timer" onClick={resetTimerFunction}>
      {currentValue}
    </div>
  )

}

//function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}



  }
  // Start the timer
  startTimer = () => {
    // This.refs
    this.setState({
      currentValue: Number(this.refs.initialValue.value)
    })

    setInterval(() => {
      this.setState({
        currentValue: this.state.currentValue - 1
      })
    }, 1000);
  }
  // Reset the current value to 150
  resetCurrent = () => {
    this.setState({
      currentValue: 150
    })
  }
  render() {
    return (
      <div className="App" >

        <Timer currentValue={this.state.currentValue}
          resetTimerFunction={this.resetCurrent}></Timer>
        <input type="text" ref="initialValue"></input>
        <button onClick={this.startTimer}>Start</button>
      </div>

    )
  };
}

export default App;
