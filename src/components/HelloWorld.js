import React from "react";

const HelloWorld = () => {
  // example of using createElement
  //   return React.createElement("h1", null, "Hello World from React.createElement");

  // better!
  // const myElement = <h1>Hello World! using JSX</h1>;
  // return myElement;

  // example of multiple elements, must be inside a () and have 1 parent wrapper
  // because only 1 element is allowed to be returned
  // example of using className="" and onCLick={}

  function handleClick() {
    alert("buttom clicked!");
  }

  // to use it in JSX, use within {}
  const name = "Ramesh";

  return (
    <>
      <h1 className="title">Hello World! using JSX</h1>
      <h2>Sub title</h2>
      <p>Paragraph</p>
      <p>{name}</p>
      <button onClick={handleClick}>click me</button>
    </>
  );
};

export default HelloWorld;
