import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Demo from "./Demo";
import Mobilepos from "./Mobilepos";
import Price from "./Price";
import Contact from "./Contact";
import Website from "./Website";
import SinglePage from "./SinglePage";
import List from "./List";
import Boom from "./Boom.js";
import "./Hero.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                width="120"
                className="img-fluid"
                alt="mesin kasir restoran online"
                src="https://1.bp.blogspot.com/-H3xERUXTRyc/YDJUZU1Y5yI/AAAAAAAANAw/X3wxK9ylVJ4mVoGLq3-ohzxUn8nVymcFgCLcBGAsYHQ/s775/SIPER.png"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-columns-gap"
                viewBox="0 0 16 16"
              >
                <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
              </svg>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav text-center">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-link active" to="/resto">
                  Features
                </Link>
                <Link className="nav-link active" to="/price">
                  Price
                </Link>
                <Link className="nav-link active" to="/demo">
                  Demo
                </Link>
                <Link className="nav-link active" to="/website">
                  Website
                </Link>
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Boom />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 p-3">
                <Route path="/" component={About} exact />
                <Route path="/resto" component={List} exact />
                <Route path="/resto/:name" component={SinglePage} />
                <Route path="/price/" component={Price} />
                <Route path="/demo/" component={Demo} />
                <Route path="/website/" component={Website} />
                <Route path="/mobilepos/" component={Mobilepos} />
                <Route path="/contact/" component={Contact} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
