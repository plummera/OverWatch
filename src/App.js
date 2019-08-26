import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import logo from './images/compass.png';
import './App.css';
import './js/console';
import { Dashboard } from './js/dashboard';
import { LoginForm } from './js/login';
import { Headline } from './js/headline';

class App extends Component {

  get menuBar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-dark"><a className="navbar-brand" href="/">OverWatch</a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler02" aria-controls="navbarToggler02" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button><div className="collapse navbar-collapse" id="navbarToggler02"><ul className="navbar-nav mr-auto mt-2 mt-lg-0"><li className="nav-item active"><a className="nav-link" href="/">Dashboard <span className="sr-only">(current)</span></a></li><li className="nav-item"><a className="nav-link" href="/">Data</a></li><li className="nav-item"><a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Testing</a></li></ul></div></nav>
  }

  render() {

    var headline = document.getElementById('headline');

    // Remove elements visibility
    function dismissElement() {
      document.getElementById('splashButton').style.visibility = "hidden";
    }

    // Fading-In Upper Menu Bar
    function menu() {
      document.getElementById('menu').style.animation = "fade-in 5s linear";
      document.getElementById('menu').style.display = "block";
      document.getElementById('menu').style.opacity = 1;
    }

    // Fading-In Pop-Up Login Form
    function loginForm() {
      console.log("Bringing up login display");
      document.getElementById('loginForm').style.animation = "fade-in 3s linear";
      document.getElementById('loginForm').style.display = "block";
      document.getElementById('loginForm').style.opacity = 1;
    }

    // On Click-Event
    function handleClick(e) {
      e.preventDefault();
      console.log('Enter Origin:');
      headline.style.animation = "fade-out 0.5s linear";
      headline.style.opacity = 0;
      document.getElementById('splashButton').style.animation = "fade-out 0.5s linear";
      document.getElementById('splashButton').style.opacity = 0;
      menu();
      loginForm();
      setTimeout(dismissElement, 3000);
    }

    // Rendering Menu & Headline w/ (version)
    return (
      <div className="App">
        <div id="menu">{this.menuBar}</div>
        <button id="splashButton" onClick={handleClick}><img src={logo} className="App-logo" alt="logo" /></button>
        <header className="App-header">
        </header>
      </div>
    );
  };
}

export default App;
ReactDOM.render(
  <Headline />,
  document.getElementById('headline')
);

ReactDOM.render(
  <LoginForm />,
  document.getElementById('loginForm')
);

ReactDOM.render(
  <Dashboard />,
  document.getElementById('splashScreen')
);
