import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Families from "./pages/Families";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/families"]}>
            <Families />
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
