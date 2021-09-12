import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Component/Icons";
import Navbar from "./Component/Navbar/Navbar";
import Page from "./Pages/Page";
import Search from "./Component/Navbar/Search";
import Favorite from "./Pages/Favorite";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route path="/search" exect>
              <Search />
            </Route>
            <Route path="/bookmarked" exect>
              <Favorite />
            </Route>
            <Route path="/anime/:pageId">
              <Page />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
