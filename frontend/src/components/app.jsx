import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from "./session/modal";
import Profile from './profile/profile';

import MainPage from './main/main_page';

const App = () => (
  <div className="app">
    <NavBarContainer />
    <Modal />
    <div className="app-inner">
      <Switch>
        <AuthRoute exact path="/profile" component={Profile} />
        <AuthRoute exact path="/" component={MainPage} />
      </Switch>
    </div>
  </div>
);

export default App;