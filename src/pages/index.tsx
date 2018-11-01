import React from 'react'
import { Section, Container, Hero, HeroBody } from 'bloomer';

import Layout from '../components/layout'

export default class IndexPage extends React.Component<{}, {}>
{
  public render(): JSX.Element
  {
    return (
      <Layout>
        <Hero isColor="info">
          <HeroBody>
            <Container>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            </Container>
          </HeroBody>
        </Hero>      
      </Layout>
    );
  }  
}