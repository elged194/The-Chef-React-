import React, { Component, Fragment } from "react";
import NavBar from "./Page/NavBar/NavBar";
import Home from "./Page/Home/Home";
//

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Home />
      </Fragment>
    );
  }
}
export default App;
