import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bulma-components/lib/components/navbar';


class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <header>
          <Navbar role="navigation" aria-label="main navigation">
            <Navbar.Brand>
              <Navbar.Item href="https://bulma.io">
                MonoMotion
              </Navbar.Item>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </Navbar.Brand>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  About
                </a>

                <a className="navbar-item">
                  Documentation
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    Technology
                  </a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">
                      Reficere
                    </a>
                    <a className="navbar-item">
                      flom
                    </a>
                    <a className="navbar-item">
                      servoarray
                    </a>
                    <a className="navbar-item">
                      Trainer
                    </a>
                  </div>
                </div>

                <a className="navbar-item">
                  Contact
                </a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary">
                      Try now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default App;
