import React, { Component } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
