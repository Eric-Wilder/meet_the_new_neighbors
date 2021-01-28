import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Families from "./pages/Families";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import EventCalendar from './components/Calendar/EventCalendar.js';

import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from "./components/Grid";
import Calendar from 'react-calendar';
import goBack from "./components/Calendar/goBack";
import Profile from "./components/Profile";
import Jumbotron from "./components/Jumbotron";

function App() {

  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <Router>
      <div>
        <Container>
        <LoginButton />
        <LogoutButton />
        <Switch>
          <Route exact path={["/", "/families"]}>
            <Families />
          </Route>
          <Route exact path="/families/:id">
            <Detail />
          </Route>
          <Route exact path="/calendar">
            <Profile/>
            <Jumbotron/>
            <EventCalendar />
            <goBack/>
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
