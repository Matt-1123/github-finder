import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users.js";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // Lifecycle method: Runs when component mounts
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");

    this.setState({ users: res.data, loading: false });
  }

  // Render is a lifecycle method that runs with the component is loaded
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
