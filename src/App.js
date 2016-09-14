import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = React.createClass({
  render: function(){
    return (
      <h1>Hello React</h1>
    );
  }
});

const WhoAmI = React.createClass({
  render: function(){
    return (
      <h1>My name is <u>{this.props.name}</u></h1>
    );
  }
});

const LoveButton = React.createClass({
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

const VueInput = React.createClass({
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

const names = [
  {name: 'sconfield', color: 'blue'},
  {name: 'vivijin', color: 'green'},
  {name: 'jacob', color: 'black'}
];
const ForList = React.createClass({
  render:function(){
    const createItem = function(item, idx){
      return <li key={idx} style={{color: item.color}}>{item.name}</li>
    };
    return (
      <div className="for">
        <ul>{this.props.arr.map(createItem)}</ul>
      </div>
    );
  }
});

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
          <ForList arr={names}></ForList>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
