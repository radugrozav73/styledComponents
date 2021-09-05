import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route to="/work" />
        <Route to="/services" />
        <Route to="/insights" />
        <Route to="/about" />
      </Switch>
    </Router>
  );
}

export default App;
