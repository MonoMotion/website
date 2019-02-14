import React from 'react'
import { Button, Navbar } from 'react-bulma-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Icon } from 'react-bulma-components'

const Header = () => (
  <header>
    <Navbar role="navigation" aria-label="main navigation">
      <Navbar.Brand>
        <Navbar.Item href="https://bulma.io">
          MonoMotion
        </Navbar.Item>

        <Navbar.Item className="is-hidden-desktop" renderAs="a" href="https://github.com/MonoMotion" target="_blank">
          <Icon>
            <FontAwesomeIcon icon={faGithub} />
          </Icon>
        </Navbar.Item>

        <Navbar.Item className="is-hidden-desktop" renderAs="a" href="https://twitter.com/monomotionhq" target="_blank">
          <Icon>
            <FontAwesomeIcon icon={faTwitter} />
          </Icon>
        </Navbar.Item>

        <Navbar.Burger
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          onClick={(e) => {
            e.target.classList.toggle("is-active")
            document.getElementById(e.target.dataset.target).classList.toggle("is-active")
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu id="navbar-menu">
        <Navbar.Item href="#about" renderAs={AnchorLink}>
          About
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
          <Navbar.Item className="is-hidden-touch is-hidden-only-desktop" renderAs="a" href="https://github.com/MonoMotion" target="_blank">
            <Icon>
              <FontAwesomeIcon icon={faGithub} />
            </Icon>
          </Navbar.Item>

          <Navbar.Item className="is-hidden-touch is-hidden-only-desktop" renderAs="a" href="https://twitter.com/monomotionhq" target="_blank">
            <Icon>
              <FontAwesomeIcon icon={faTwitter} />
            </Icon>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  </header>
)

export default Header
