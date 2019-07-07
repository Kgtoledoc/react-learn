import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Greeting extends Component {
  componentWillMount() {
    console.log("In componentWillMount");
  }
  componentDidMount() {
    console.log("In componentDidMount");
  }
  componentWillReceiveProps() {
    console.log('In componentWillReceiveProps');

  }
  shouldComponentUpdate() {
    console.log('In shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('In componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div>{this.props.greeting}</div>
    )
  }
}

//function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello"

    }
    setInterval(() => {
      this.setState({
        greeting: "Hi"
      })
    }, 5000)



  }

  render() {
    return (
      <div className="App" >

        <Greeting greeting={this.state.greeting}></Greeting>
      </div>

    )
  };
}

export default App;
