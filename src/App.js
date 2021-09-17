import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Component/Icons";
import Navbar from "./Component/Navbar/Navbar";
import Page from "./Pages/Page";
import Search from "./Component/Navbar/Search";
import Favorite from "./Pages/Favorite";
import NotFound from "./Component/NotFound";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/search" exact>
              <Search />
            </Route>
            <Route path="/bookmarked" exact>
              <Favorite />
            </Route>
            <Route path="/anime/:pageId" exact>
              <Page />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
