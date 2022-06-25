import './App.css';
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Cart from './Pages/Cart';
import SignedNavbar from './Components/Navbar/SignedNavbar';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path = '/login'>
            <LogIn/>
          </Route>
          <Route path = '/cart'>
            <SignedNavbar/>
            <Cart/>
          </Route>
          <Route path = '/signup'>
            <SignUp/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
