import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Component/Icons";
import Spring from "./Pages/Spring";
import Summer from "./Pages/Summer";
import Winter from "./Pages/Winter";
import Fall from "./Pages/Fall";
import Favorite from "./Pages/Favorite";
import Watching from "./Watching";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route path={["/home", "/", "/winter"]} exact>
              <Winter />
            </Route>
            <Route path="/spring" exect>
              <Spring />
            </Route>
            <Route path="/summer" exact>
              <Summer />
            </Route>
            <Route path="/fall" exect>
              <Fall />
            </Route>
            <Route path="/favorite" exect>
              <Favorite />
            </Route>
            <Route path="/watching" exect>
              <Watching />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
