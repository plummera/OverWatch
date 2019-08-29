import React from 'react';
import ReactDOM from 'react-dom';
import formPhoto from './../protrack.svg';
import { Dashboard } from './dashboard';
import { CloseButton } from './closeButton';


export class LoginForm extends React.Component {

  get closeButton() {
    return <img src={CloseButton} alt="Close"/>
  }

  render() {
    var loginForm = document.getElementById('loginForm');

    function dismissElement() {
      loginForm.style.visibility = "hidden";
    }

    function removeLoginScreen(e) {
      loginForm.style.animation = "fade-out 2s";
      loginForm.style.opacity = 0;
      setTimeout(dismissElement, 2000);
    }

    function removeSplashScreen(e) {
      document.getElementById('splashScreen').style.animation = "fade-out 3s";
      document.getElementById('splashScreen').style.opacity = 0;
      removeLoginScreen(e);
    }

    // THANK YOU, NEXT
    function connectFour(e) {
      e.preventDefault();
      console.log("CONNECT FOUR!");
      document.getElementById('formPhoto').style.animation = "App-logo-spin-counter-clockwise infinite 3s linear";
      removeSplashScreen(e);
      return {Dashboard}
    }

    return <form onSubmit={connectFour}><img id="formPhoto" src={formPhoto} alt="Login Please" /><div onClick={removeLoginScreen} className="close"></div><fieldset><div className="form-group"><label htmlFor="TextInput">Select Telescope</label><select id="TextInput" className="form-control" placeholder="Logging in from: "><option>Walt Disney Corporation</option><option>Boeing</option><option>University of Pennsylvania</option><option>Bank of America</option><option>First Data</option></select></div><div className="form-group"><label htmlFor="Select">Choose Region:</label><select id="Select" className="form-control"><option>AMER</option><option>EMEA</option><option>LATAM</option><option>APAC</option></select></div><div className="form-group"><div className="form-check"><input className="form-check input" type="checkbox" id="FieldsetCheck"></input><label className="form-check-label" htmlFor="FieldsetCheck">Check for fuzz</label></div></div><button type="submit" className="btn btn-primary">Submit</button></fieldset></form>
  }
}

ReactDOM.render(
  <LoginForm />,
  document.getElementById('loginForm')
);
