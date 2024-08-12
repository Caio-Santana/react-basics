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

function App() {
  return (
    <div className="App">
      <MyDefaultWelcome name="John" />
      <Greeting name="Smith" />
      <FC />
      <SecondComponent />
      <MyComponent />
      <HelloWorld />
    </div>
  );
}

export default App;
