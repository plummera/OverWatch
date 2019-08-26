import React from 'react';

export class NavBar extends React.Component {

  get dataToggle() {
    var data = console.log(document.getElementById('loginForm'));
    // if (document.getElementById('loginForm').style.position) {
    //   document.getElementById('loginForm').style.position = "static";
    // } else {
    //   document.getElementById('loginForm').style.position = "fixed";
    // }
    return data
  }

  get headline() {
    var data = console.log("No clue whats going on.");

    return data
  }

  render() {

    return this.headline;
  };

}
