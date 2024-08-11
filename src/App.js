import "./App.css";
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name="John" />
      <Greeting name="Smith" />
    </div>
  );
}

export default App;
