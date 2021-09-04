import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route to="/" />
        <Route to="/" />
        <Route to="/" />
        <Route to="/" />
      </Switch>
    </Router>
  );
}

export default App;
