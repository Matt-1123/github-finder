import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem.js";
import "./App.css";

class App extends Component {
  // Render is a lifecycle method that runs with the component is loaded
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
