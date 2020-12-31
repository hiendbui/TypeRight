import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SessionModal from "./session/session_modal";

import MainPage from './main/main_page';

const App = () => (
  <div className="app">
    <NavBarContainer />
    <SessionModal />
    <div className="app-inner">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Redirect to="/"/>
      </Switch>
    </div>
  </div>
);

export default App;