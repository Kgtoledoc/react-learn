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
    this.state = { currentValue: 150 }

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
      </div>

    )
  };
}

export default App;
