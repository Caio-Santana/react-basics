import React from "react";

class Greeting extends React.Component {



  render() {
    return <h1>Welcome, "{this.props.name}" from Class component</h1>;
  }
}

export default Greeting;
