import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import App from './App.js';

class Navigate extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/" activeClassName="active">home</Link>
          <ul>
            <li>
              <Link to="/about" activeClassName="active">about</Link>
            </li>
            <li>
              <Link to="/inbox" activeClassName="active">inbox</Link>
              <ul>
                <li>
                  <Link to="/inbox/message/vivijin" activeClassName="active">message</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/app" activeClassName="active">app</Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="router-home">
        <h1>home</h1>
        <Navigate></Navigate>
        {this.props.children}
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div className="router-about">
        <h2>home -> about page</h2>
      </div>
    );
  }
}

class Inbox extends Component {
  render() {
    return (
      <div className="router-inbox">
        <h2>home -> inbox page</h2>
        {this.props.children}
      </div>
    );
  }
}

class Message extends Component {
  render() {
    const { name } = this.props.params
    return (
      <div className="router-message">
        <h2>home -> inbox -> message page</h2>
        <h3>send: hi, {name}!</h3>
      </div>
    );
  }
}

class LearnRouter extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox}>
            <Route path="message(/:name)" component={Message} />
          </Route>
          <Route path="app" component={()=> (<App store={this.props.store} />)} />
        </Route>
      </Router>
    );
  }
}

export default LearnRouter;
