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
    this.state = {
      startValue: ''
    }



  }
  // Start the timer
  startTimer = () => {

    this.setState({
      currentValue: Number(this.state.startValue)
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
  handleInputChange = (event) => {
    this.setState({
      startValue: event.target.value
    });
  }
  render() {
    return (
      <div className="App" >

        <Timer currentValue={this.state.currentValue}
          resetTimerFunction={this.resetCurrent}></Timer>
        <input type="text" value={this.state.startValue}
          onChange={this.handleInputChange}></input>
        <button onClick={this.startTimer}>Start</button>
      </div>

    )
  };
}

export default App;
