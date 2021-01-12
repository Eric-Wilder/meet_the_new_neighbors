import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Families from "./pages/Families";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import ProfileList from "./components/ProfileList";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/families"]}>
            <Families />
            <ProfileList />
          </Route>
          <Route exact path="/families/:id">
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
