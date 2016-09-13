import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to create-react-app</h2>
          <Hello></Hello>
          <WhoAmI name="sconfield"></WhoAmI>
          <LoveButton></LoveButton>
          <VueInput></VueInput>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

let Hello = React.createClass({
  render: function(){
    return (
      <h1>Hello React</h1>
    );
  }
});

let WhoAmI = React.createClass({
  render: function(){
    return (
      <h1>My name is <u>{this.props.name}</u></h1>
    );
  }
});

let LoveButton = React.createClass({
  getInitialState: function(){
    return {
      loved: true
    };
  },
  clickHandler: function(){
    this.setState({
      loved: !this.state.loved
    });
  },
  render: function(){
    let text = this.state.loved ? "love" : "don't love";
    let clsName = this.state.loved ? "love" : "dont-love";
    return (
      <h1 className={clsName}>
        I <button className={clsName} onClick={this.clickHandler}>{text}</button> you!
      </h1>
    );
  }
});

let VueInput = React.createClass({
  getInitialState: function() {
    console.log("initial state");
    return {
      vue: ''
    };
  },
  componentWillMount: function() {
    console.log("will mount");
  },
  componentDidMount: function() {
    console.log("did mount");
  },
  changeHandler: function(event){
    let val = event.target.value;
    this.setState({
      vue: val
    });
  },
  render: function() {
    const DEFAULT_VUE = "please input any word.";
    let showVue = DEFAULT_VUE;
    if (this.state.vue !== "") {
      showVue = this.state.vue;
    }
    return (
      <div className="vue">
        <div className="vue-input">
          <input type="text" placeholder={DEFAULT_VUE} onChange={this.changeHandler} />
        </div>
        &nbsp;-->&nbsp;
        <label>{showVue}</label>
      </div>
    );
  }
});
