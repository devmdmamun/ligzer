import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Component/Icons";
import Navbar from "./Component/Navbar/Navbar";
import Page from "./Pages/Page";
import Search from "./Component/Navbar/Search";

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
            <Route path="/search" exect>
              <Search />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
