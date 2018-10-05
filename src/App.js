import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';


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
      <Link to="/home">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/settings">Settings</Link>
    </p>
  </div>
);
const Home = (props) => (
  <Page title="Home" />
);
const About = (props) => (
  <Page title="About" />
);
const Settings = (props) => (
  <Page title="Settings" />
);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
