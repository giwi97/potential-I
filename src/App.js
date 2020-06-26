import React, { Component } from "react";
import logo from "./logo.svg";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Header } from './components/layouts/header'
import { Content } from "./components/layouts/content";



export const App = () => (

    <div className = "App">
      <Header />
      <Content />
    </div>

);