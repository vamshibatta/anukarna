import './App.css';
import Navbar from './Components/Navbar';
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/new-products">
            <p>Under construction!!</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
