import React from 'react'
import { Section, Container, Hero, HeroBody } from 'bloomer';

import Layout from '../components/layout'

export default class IndexPage extends React.Component<{}, {}>
{
  public render(): JSX.Element
  {
    return (
      <Layout>
        <Hero isColor="primary">
          <HeroBody>
            <Container>
              <h2 className="title">Software Entwickler &amp; Web Enthusiast</h2>
            </Container>
          </HeroBody>
        </Hero>      
      </Layout>
    );
  }  
}