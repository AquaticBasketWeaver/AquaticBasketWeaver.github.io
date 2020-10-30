import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ContentPage from "./pages/ContentPage/ContentPage";

function App() {
  const [galleryPage, setGalleryPage] = useState(1);
  return (
    <Router>
      <Switch>
        <Route path="/content">
          <ContentPage
            galleryPage={galleryPage}
            setGalleryPage={setGalleryPage}
          />
        </Route>
        <Route path="/">
          <LandingPage galleryPage={galleryPage} setGalleryPage={setGalleryPage} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
