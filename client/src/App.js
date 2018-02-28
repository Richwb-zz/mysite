import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import Home from "./components/Home/home";
import Richard from "./components/About/richard";
import Website from "./components/About/website";
import Portfolio from './components/Portfolio/portfolio';
import Footer from './components/Footer/footer';
import FAQ from './components/Faq/faq';
import Resume from './components/Resume/resume';
import Contact from './components/Contact/contact';


class App extends Component {
  render() {
    return [
      // React router to change address url to represent the current page
      <Router key="router">
        <div>
          {/* top navigation bar including Page title */}
          <Navbar key="navbar" />
          <Switch key="switch">
            {/* displays address url as "domain/" and calls the Home component */}
            <Route key="homeroute" exact path="/" component={Home} />
            {/* displays address url as "domain/about/richard" and calls the about/richard component */}
            <Route key="richardroute" exact path="/about/richard" component={Richard} />
            {/* displays address url as "domain/about/website" and calls the about/website component */}
            <Route key="websiteroute" exact path="/about/website" component={Website} />
            {/* displays address url as "domain/about" and calls the About component */}
            <Route key="portfolioroute" exact path="/portfolio" component={Portfolio} />
            {/* displays address url as "domain/faq" and calls the FAQ component */}
            <Route key="faqroute" exact path="/faq" component={FAQ} />
            {/* displays address url as "domain/resume" and calls the Resume component */}
            <Route key="resumeroute" exact path="/resume" component={Resume} />
            {/* displays address url as "domain/contact" and calls the Contact component */}
            <Route key="contactroute" exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>,
      // Footer Component at bottom of page
      <Footer key="footer" />
    ];
  }
}

export default App;