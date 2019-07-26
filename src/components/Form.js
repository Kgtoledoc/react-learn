import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { titleValue: ''}
  }
  static propType = {
    addBookAction: PropTypes.func.isRequired
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    this.props.addBookAction(
     // For ID 
     //document.getElementById("titleInput").value
     // For REFS
     //this.refs.titleInput.value
     this.state.titleValue
    );

    this.setState({ titleValue: ''})
  }

  handleTitleChange = (event) => {
    this.setState({ titleValue: event.target.value })
  }

  render() {
    return (
      <div className="Form">
        <input type="text" placeholder="Book title" value={this.state.titleValue} 
          onChange={this.handleTitleChange}></input>
        <button onClick={this.handleButtonClick}>Add book</button>
      </div>
    );
  }
}

export default Form;