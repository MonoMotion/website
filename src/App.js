import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <header>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                MonoMotion
              </a>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

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
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
