import { useState } from "react";

const User = () => {
  // example 1 useState Hook
  //   const [firstName, setFirstName] = useState("Ramesh");
  //   const [lastName, setLastName] = useState("Fadatare");
  //   const [email, setEmail] = useState("ramesh@gmail.com");

  // example 2 useState Hook with obj
  const [user, setUser] = useState({
    firstName: "Ramesh",
    lastName: "Fadatare",
    email: "ramesh@gmail.com",
  });

  function updateUser() {
    // example 1 useState Hook
    // setFirstName("Ram");
    // setLastName("Jadhav");
    // setEmail("ram@gmail.com");
  }

  return (
    <>
      <h1>User Details</h1>
      
      {/* example 1 useState Hook */}
      {/* <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p> */}

      {/* example 2 useState Hook with obj */}
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <button onClick={updateUser}>Update User</button>
    </>
  );
};

export default User;
