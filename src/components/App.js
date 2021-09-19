import "../style/App.scss";
import Logo from "./Logo";
import React from "react";
import NavBar from "./Nav";
import Banner from "./Banner";
import Banner2 from "./banner2";
import D_404 from "./D_404.js";
import "../style/_header.scss";
import Gallery from "./gallery";
import Footer from "./footer";
import About from "./About";
import FicheLogement from "./FicheLogement";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <header>
          <Logo />
          <NavBar />
        </header>
        <div className="post-header">
          <Switch>
            <Route path="/logement" exact component={Banner2} />
            <Route path="/" component={Banner} />
          </Switch>
        </div>
        <main>
          <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/apropos" exact component={About} />
            <Route path="/logement" exact component={FicheLogement} />
            <Route path="/" component={D_404} />
          </Switch>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
