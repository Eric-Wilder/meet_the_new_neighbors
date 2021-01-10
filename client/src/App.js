import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profiles from "./pages/Profiles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/profiles"]}>
            <Profiles />
          </Route>
          <Route exact path="/profiles/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
