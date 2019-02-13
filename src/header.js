import React from 'react';
import { Button, Navbar } from 'react-bulma-components';

const Header = () => (
  <header>
    <Navbar role="navigation" aria-label="main navigation">
      <Navbar.Brand>
        <Navbar.Item href="https://bulma.io">
          MonoMotion
        </Navbar.Item>

        <Navbar.Burger role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu id="navbarBasicExample">
        <Navbar.Item>
          About
        </Navbar.Item>

        <Navbar.Item>
          Documentation
        </Navbar.Item>

        <Navbar.Item className="has-dropdown is-hoverable">
          <Navbar.Link>
            Technology
          </Navbar.Link>

          <Navbar.Dropdown>
            <Navbar.Item>
              Reficere
            </Navbar.Item>
            <Navbar.Item>
              flom
            </Navbar.Item>
            <Navbar.Item>
              servoarray
            </Navbar.Item>
            <Navbar.Item>
              Trainer
            </Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>

        <Navbar.Item>
          Contact
        </Navbar.Item>

        <Navbar.Container position="end">
          <Navbar.Item>
            <Button className="is-primary">
              Try now
            </Button>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  </header>
)

export default Header
