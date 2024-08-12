import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Ramesh",
      lastName: "Fadatare",
      email: "ramesh@gmail.com"
    };
  }

  updateEmployee() {
    this.setState({
        firstName: "Ram",
        lastName: "Jadhav",
        email: "ram@gmail.com"

    })
  }

  render() {
    return (
      <>
        <h1>Employee Details</h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <button onClick={() => this.updateEmployee()}>Update Employee</button>
      </>
    );
  }
}

export default Employee;
