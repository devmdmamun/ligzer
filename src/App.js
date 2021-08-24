import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Component/Icons";
import Favorite from "./Pages/Favorite";
import Watching from "./Watching";
import Navbar from "./Component/Navbar/Navbar";
import Upload from "./upload/Upload";
import Page from "./Pages/Page";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route path={["/home", "/", "/winter"]} exact>
              <Page />
            </Route>
            <Route path="/spring" exect>
              <Page />
            </Route>
            <Route path="/summer" exact>
              <Page />
            </Route>
            <Route path="/fall" exect>
              <Page />
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
