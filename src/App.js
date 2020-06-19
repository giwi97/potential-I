import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


class App extends Component {
  state={isSignedIn:false}
  render() {
  return (
    <div className="App">
      {this.state.isSignedIn ?
        <text>Signed in!</text>
        :
        <text>Not signed in</text>
      }
    </div>
  );
  }
}

export default App;
