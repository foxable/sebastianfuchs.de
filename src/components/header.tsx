import React from 'react'
import { Link } from 'gatsby'
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  Container } from 'bloomer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faXing,
  faFlickr
} from '@fortawesome/free-brands-svg-icons'

const Header = ({ siteTitle }) => (
  <Navbar className="is-dark is-spaced">
    <Container>
      <NavbarBrand>
        <Link to="/" className="navbar-item is-size-5">
          <h1 className="is-size-4 has-text-weight-semibold">Sebastian Fuchs</h1>
          <span className="has-text-primary" style={ { margin: "0 1rem" } }>//</span>
          <span className="has-text-grey-light">foxable</span>
        </Link>
      </NavbarBrand>
      <NavbarMenu>
        <NavbarStart>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem href="https://github.com/foxable" title="GitHub"><FontAwesomeIcon icon={faGithub} size="lg"/></NavbarItem>
          <NavbarItem href="https://twitter.com/sefuchs" title="Twitter"><FontAwesomeIcon icon={faTwitter} size="lg"/></NavbarItem>          
          <NavbarItem href="https://www.xing.com/profile/Sebastian_Fuchs77" title="Xing"><FontAwesomeIcon icon={faXing} size="lg"/></NavbarItem>
          <NavbarItem href="https://www.flickr.com/photos/167371494@N04" title="Flickr"><FontAwesomeIcon icon={faFlickr} size="lg"/></NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Container>
  </Navbar>
)

export default Header
