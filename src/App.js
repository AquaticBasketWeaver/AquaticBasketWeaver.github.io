import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ContentPage from "./pages/ContentPage/ContentPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/content">
          <ContentPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
