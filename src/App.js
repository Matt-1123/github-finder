import React, { Fragment, Component } from "react";
import "./App.css";

class App extends Component {
  // Render is a lifecycle method that runs with the component is loaded
  render() {
    const name = "John Doe";
    const loading = false;
    const showName = true;

    return (
      <Fragment>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {showName && name.toUpperCase()}</h1>
        )}
      </Fragment>
    );
  }
}

export default App;
