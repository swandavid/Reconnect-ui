import "tailwindcss/dist/base.css";
import "../styles/globalStyles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

import PrivateRoute from "./PrivateRoute";

/* Inner Pages */
import Login from "./Login.js";
import Signup from "./Signup.js";
import SignupNew from "./SignupNew";
import Hero from './Hero.js';
import Landing from "./Landing.js";
import Team from "./Team.js";
import ForgotPassword from "./ForgotPassword";
import Error from "./Error";
import Profile from "./Profile";
import ActivityLog from "./ActivityLog";
import Rating from "./Rating";
import LandingPrivate from "./LandingPrivate";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/home" component={Hero}/>
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute exact path="/activity-log" component={ActivityLog}/>
          <PrivateRoute exact path="/rating" component={Rating}/>
          <PrivateRoute exact path="/landing-private" component={LandingPrivate}/>
          <Route path="/" component={Landing} exact/>
          <Route path="/about" component={Team}/>
          <Route path="/signup" component={SignupNew} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route component={Error} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;