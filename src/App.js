import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/work" exact />
        <Route path="/services" exact />
        <Route path="/insights" exact />
        <Route path="/about" exact />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
