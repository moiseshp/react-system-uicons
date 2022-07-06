import ReactDOM from "react-dom/client";
import { TextInput } from "./lib";
import Hola from './lib/hello/Hola'
import World from './lib/hello/World'

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Hola />
    <World />
    <TextInput label="Email Address" placeholder="name@example.com" />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
