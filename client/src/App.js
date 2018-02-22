import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import Mainpage from './components/Mainpage/mainpage';
import Home from "./components/Home/home";
import About from "./components/About/about";
import Footer from './components/Footer/footer';
import FAQ from './components/Faq/faq';
import Resume from './components/Resume/resume';
import Contact from './components/Contact/contact';

class App extends Component {
  render() {
    return [
      // React router to change address url to represent the current page
      <Router>
        <div>
          {/* top navigation bar including Page title */}
          <Navbar />
          <Switch>
            {/* displays address url as "domain/" and calls the Home component */}
            <Route exact path="/" component={Home} />
            {/* displays address url as "domain/about" and calls the About component */}
            <Route exact path="/about" component={About} />
            {/* displays address url as "domain/faq" and calls the FAQ component */}
            <Route exact path="/faq" component={FAQ} />
            {/* displays address url as "domain/resume" and calls the Resume component */}
            <Route exact path="/resume" component={Resume} />
            {/* displays address url as "domain/contact" and calls the Contact component */}
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Mainpage />
        </div>
      </Router>,
      // Footer Component at bottom of page
      <Footer />
    ];
  }
}

export default App;