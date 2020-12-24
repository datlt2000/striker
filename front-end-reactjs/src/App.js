import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./layouts/Register";
import LandingPage from './layouts/LandingPage';
import Error from './layouts/Error';
import Login from './layouts/Login';
import UserHome from "./layouts/UserHome";
import Feedback from "./layouts/Feedback";
import Calendar from './layouts/Calendar';
import HomeworkPage from './layouts/HomeworkPage';
import Groups from "./layouts/Groups";
import Admin from "./layouts/Admin";
import Profile from "./layouts/Profile";

function App() {
  return (
    // React router container
    <Router>
      {/* Switch component will get link and redirect to component */}
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={UserHome} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/homework" component={HomeworkPage} />
        <Route path="/groups" component={Groups} />
        <Route path="/admin" component={Admin} />
        <Route path="/profile" component={Profile} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
