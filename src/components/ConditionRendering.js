import { useState } from "react";

const ConditionRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // example 1 condition rendering using if/else
  //   if (isLoggedIn) {
  //     return <p>Welcome, User</p>;
  //   } else {
  //     return <p>Please Login!</p>;
  //   }

  // example 1 another way
  let message;
  if (isLoggedIn) {
    message = <p>Welcome, User</p>;
  } else {
    message = <p>Please Login!</p>;
  }

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <>
      {/* {message} */}
      {
        // ternary operator
        // isLoggedIn ? <p>Welcome, User</p> : <p>Please Login!</p>

        // short circuit operator
        isLoggedIn && <p>Welcome, User</p>
      }
      <br />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default ConditionRendering;
