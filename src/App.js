//import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Submitted from "./pages/Submitted";
import SearchResults from "./pages/SearchResults";
import "./styles/Home.css";
import "./styles/NavBar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/submitted">
          <Submitted />
        </Route>
        <Route exact path="/search">
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
