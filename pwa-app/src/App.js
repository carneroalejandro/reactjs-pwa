import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.jpg';
import './App.css';
import { Router, browserHistory, Route, Link } from 'react-router';
import { simpleAction } from './actions/SimpleAction'

simpleAction = (event) => {
  this.props.simpleAction();
};

const Page = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <p className="App-intro">
      This is the {title} page.
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/settings">Settings</Link>
    </p>
    <button onClick={this.simpleAction}>Test redux action</button>
  </div>
);

<pre>
  {
    JSON.stringify(this.props)
  }
</pre>


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