import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.jpg';
import './App.css';
import { Router, browserHistory, Route, Link } from 'react-router';
import { simpleAction } from './actions/simpleAction'


const Page = ({ title }) => (
  <div className="App">
    <pre>
      {
        JSON.stringify(this.props)
      }
    </pre>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <div class='ui container'>
      <p className="App-intro">
        This is the {title} page.
    </p>
      <div className={'ui inverted menu'}>
        <Link className={'item'} to="/">Home</Link>
        <Link className={'item'} to="/about">About</Link>
        <Link className={'item'} to="/settings">Settings</Link>
      </div>

      <div>
        <button className={'ui button'} onClick={this.simpleAction}>Test redux action </button>
      </div>
    </div>
  </div>
);

const Home = (props) => (
  <Page title="Home" />
);

const About = (props) => (
  <Page title="About" />
);

const Settings = (props) => (
  <Page title="Settings">
  </Page>
);


class App extends Component {
  simpleAction = (event) => {
    console.log('testbtn');
    this.props.simpleAction();
  };

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);