import React, { Component } from "react";

class Loading extends Component {
  componentWillUnmount() {
    console.log("Loading Método Will Unmount");
  }

  render() {
    console.log("Loading Método Render");

    return (
      <>
        <div className="loader"></div>
        <span className="loading">Loading ...</span>
      </>
    );
  }
}

export default Loading;
