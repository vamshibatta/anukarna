import './App.css';
import Navbar from './Components/Navbar';
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductList from './Pages/ProductList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/products/:category">
            <ProductList/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
