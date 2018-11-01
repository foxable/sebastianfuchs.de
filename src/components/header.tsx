import React from 'react'

import { Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarStart, Container } from 'bloomer';

const Header = ({ siteTitle }) => (
  <Navbar className="is-dark is-fixed-top">
    <Container>
      <NavbarBrand>
        <NavbarItem>foxable.net</NavbarItem>
      </NavbarBrand>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem>Home</NavbarItem>
        </NavbarStart>
      </NavbarMenu>
    </Container>
  </Navbar>
)

export default Header
