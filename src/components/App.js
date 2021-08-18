import "tailwindcss/dist/base.css";
import "../styles/globalStyles.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

import PrivateRoute from "./PrivateRoute";

/* Inner Pages */
import Login from "./Login.js";
import Signup from "./Signup.js";
import Hero from './Hero.js';
import Landing from "./Landing.js";
import Team from "./Team.js";
import ForgotPassword from "./ForgotPassword";
import Error from "./Error";
import Profile from "./Profile";
import ActivityLog from "./ActivityLog";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/home" component={Hero}/>
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute exact path="/activity-log" component={ActivityLog}/>
          <Route path="/" component={Landing} exact/>
          <Route path="/about" component={Team}/>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route component={Error} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;