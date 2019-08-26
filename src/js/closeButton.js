import React from 'react';
import ReactDOM from 'react-dom';
import closeButtonImage from './../images/closeButton.png';

export class CloseButton extends React.Component {

  render() {
    return <div><img src={closeButtonImage} alt="Close" /></div>
  }
}

ReactDOM.render(
  <CloseButton />,
  document.getElementById('loginForm')
)
