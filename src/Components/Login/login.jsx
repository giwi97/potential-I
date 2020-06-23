import React, {Component} from "react";
import App from "../../App";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function login() {

  return (
    <React.Fragment>
      {state.isSignedIn ? (
        <span>
          <div>Signed in!</div>
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          <h1>Welcome {firebase.auth().currentUser?.displayName}</h1>
          <img alt="Profile Image" src={firebase.auth().currentUser.photoURL} />
        </span>
      ) : (
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </React.Fragment>
  );
}
