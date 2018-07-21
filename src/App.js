import React, { Component } from 'react';
import Char from './Char/Char';
import Validatation from './Validation/Validation';

class App extends Component {

  state = {
    userInput: ''
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (charIndex) => {
    console.log("coming in deleteChar");
    const newCharList = this.state.userInput.split('');
    newCharList.splice(charIndex,1);
    const updatedText = newCharList.join('');
    this.setState({userInput: updatedText});
  }

  render() {
      const charList = this.state.userInput.split('').map((char, index) => {
      return <Char 
                character={char}                
                clicked = {() => this.deleteCharHandler(index)}
                key = {index} 
              />;
    });

    return (
      <div className="App">
      <input  type="text" 
              onChange = {this.inputChangeHandler} 
              value = {this.state.userInput}
      />
      <p> {this.state.userInput} </p>
      <Validatation inputLength = {this.state.userInput.length} />
      {charList}
      </div>
    );
  }
}

export default App;