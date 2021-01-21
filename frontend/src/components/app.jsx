import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SessionModal from "./session/session_modal";
import TestFormModal from "./test_form/test_form_modal";
import Profile from './profile/profile';
import Test from "./test/test_container";
import About from "./about/about";

import MainPage from './main/main_page';

const App = () => (
  <div className="app">
    <NavBarContainer />
    <SessionModal />
    <TestFormModal />
    <div className="app-inner">
      <Switch>
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route exact path="/tests/:testId" component={Test} />
        <Route exact path="/" component={MainPage} />
        <Route path="/tests/:testId" component={Test} />
        <Route exact path="/about" component={About} />
        <Redirect to="/"/>
      </Switch>
    </div>
    <footer>
          <Link to="/about">
            <span className="footer">Created by Anthony Bologna, Hien Bui, Josh Bubar, and Lawrence Nguyen &copy; 2020</span>
          </Link>
    </footer>
  </div>
);

export default App;