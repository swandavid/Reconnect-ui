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

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/home" component={Hero} />
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