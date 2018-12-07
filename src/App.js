import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state={
    value1: Math.floor(Math.random() * 100),
    value2:Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    randomValue: Math.floor(Math.random() * 3) ,
    numQuestions: 0,
    numCorrect: 0,
  }

getNewNumbers=()=>{
    this.setState(()=>({
      value1: Math.floor(Math.random() * 100),
      value2:Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
      randomValue: Math.floor(Math.random() * 3) ,
    }))
}

getScore=( event, value1,value2,value3, randomValue,numQuestions, numCorrect)=>{
    this.getNewNumbers();
    const selectedValue=event.target.name;
    const proposedAnswer=this.state.value1+this.state.value2+this.state.value3+this.state.randomValue;
    const correctAnswer=this.state.value1+this.state.value2+this.state.value3;
    this.setState(currentState=>({
      
      numCorrect: (proposedAnswer===correctAnswer && selectedValue==="true")||
      	(proposedAnswer!==correctAnswer && selectedValue==="false")
      	?currentState.numCorrect+1:currentState.numCorrect,
      numQuestions: currentState.numQuestions+1
    }))
}


  render() {
    const proposedAnswer=this.state.value1+this.state.value2+this.state.value3+this.state.randomValue;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedAnswer}`}</p>
          </div>
          <button name="true" onClick={this.getScore}>True</button>
          <button name="false" onClick={this.getScore}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
