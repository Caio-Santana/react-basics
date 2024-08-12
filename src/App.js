import "./App.css";
// import example of default, don't need {}
import Greeting from "./components/Greeting";
// import example of named, uses {}, and using alias
import MyComponent, {
  FirstComponent as FC,
  SecondComponent,
} from "./components/MyComponent";
// with default we don't need to use alias with as, just change the name
// because only 1 default per file
import MyDefaultWelcome from "./components/Welcome";
import HelloWorld from "./components/HelloWorld";
import Student from "./components/Student";
import Employee from "./components/Employee";
import User from "./components/User";
import EventHandling from "./components/EventHandling";

function App() {
  const student = {
    firstName: "Mary",
    lastName: "Oak",
    email: "mary@gmail.com",
  };

  const skills = ["HTML", "CSS", "JavaScript"];

  return (
    <div className="App">
      {/* <MyDefaultWelcome name="John" />
      <Greeting name="Smith" />
      <FC />
      <SecondComponent />
      <MyComponent />
      <HelloWorld /> */}
      {/* example 1 props */}
      {/* <Student firstName="John" lastName="Doe" email="john@mail.com" />
      <Student firstName="Joe" lastName="Smith" email="joe@mail.com" /> */}

      {/* example 2 passing object & example 3 array */}
      {/* <Student student={student} skills={skills} /> */}

      {/* <Student firstName="Joe" lastName="Smith" email="joe@mail.com" />
      <Employee /> */}
      <User />
      <EventHandling />
    </div>
  );
}

export default App;
