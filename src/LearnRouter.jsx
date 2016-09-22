import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import App from './App.js';

class Navigate extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/" activeClassName="active">home</Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">about</Link>
        </li>
        <li>
          <Link to="/inbox" activeClassName="active">inbox</Link>
        </li>
        <li>
          <Link to="/inbox/message/vivijin" activeClassName="active">message</Link>
        </li>
        <li>
          <Link to="/app" activeClassName="active">app</Link>
        </li>
      </ul>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        {this.props.children}
        <Navigate></Navigate>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h2>home -> about page</h2>
      </div>
    );
  }
}

class Inbox extends Component {
  render() {
    return (
      <div>
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
      <div>
        <h3>home -> inbox -> message page</h3>
        <h4>send: hi {name}!</h4>
      </div>
    );
  }
}

class LearnRouter extends Component {
  render() {
    console.log(this.props.store);
    return (
      <Router history={hashHistory} store={this.props.store}>
        <Route path="/" component={Home}>
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox}>
            <Route path="message(/:name)" component={Message} />
          </Route>
          <Route path="app" component={App} />
        </Route>
      </Router>
    );
  }
}

export default LearnRouter;
