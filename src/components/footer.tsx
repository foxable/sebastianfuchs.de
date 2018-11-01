import React from 'react'
import { Link } from 'gatsby'
import { Footer as FooterElement, Container, Level, LevelLeft, LevelRight } from 'bloomer';

const Footer = () => (
  <FooterElement>
    <Container>
      <Level>
        <LevelLeft>&copy; 2018 Sebastian Fuchs</LevelLeft>
        <LevelRight>
          <Link to="/impressum/">Impressum</Link>
        </LevelRight>
      </Level>        
    </Container>
  </FooterElement>
)

export default Footer
