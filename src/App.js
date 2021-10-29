import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import WeatherApp from "./WeatherApp";
import Notes from "./Notes";
import Dosha from "./Dosha";
import LinkPage from "./LinkPage";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        {/* NAVIGATION */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100">
          <nav className="text-gray-600">
            <div className="container mx-auto flex justify-between px-6 lg-px-0 py-6">
              {/* LEFT HEADER */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="font-bold font-serif text-2xl text-teal-800"
                >
                  debbie dann digital
                </Link>
              </div>

              {/* RIGHT HEADER */}
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  to="/"
                  className="inline-block  hover:text-gray-900 hover-underline-animation"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="inline-block hover:text-gray-900 hover-underline-animation"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="py-1
              px-4
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
               from-teal-600
              to-teal-800
              hover:from-teal-800 hover:to-teal-600
              text-teal-50
              font-bold
              text-lg
              tracking-wide
              transition
              duration-500"
                >
                  Contact
                </Link>
              </div>

              {/* MOBILE BUTTON */}
              <div className="md:hidden flex">
                <button className="mobile-menu-button" onClick={toggleMenu}>
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* MOBILE MENU */}
            <div
              className={`mobile-menu md:hidden ${
                isActive ? "" : "hidden"
              }`}
            >
              <div className="flex justify-center space-x-6">
                <Link
                  to="/"
                  className="inline-block  hover:text-gray-900 hover-underline-animation"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="inline-block hover:text-gray-900 hover-underline-animation"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="inline-block hover:text-gray-900 hover-underline-animation"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/weatherapp">
              <WeatherApp />
            </Route>
            <Route path="/dosha">
              <Dosha />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/linkpage">
              <LinkPage />
              </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          {/* FOOTER */}

          <footer className="py-6 bg-orange-50 text-teal-800">
            <div
              className="
            mt-4
            pt-4
            container
            mx-auto
            px-6
            lg:px-0
            flex
            justify-between
            border-t border-orange-200
          "
            >
              <div>Copyright &copy; 2021</div>
              <div className="space-y-2 mb-3">
                <Link to="/" className="block">
                  Home
                </Link>
                <Link to="/projects" className="block">
                  Projects
                </Link>
                <Link to="/contact" className="block">
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </div>
    );
  }

  export default App;
