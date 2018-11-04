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
        <Section>
          <Container>
            <p className="subtitle">Hi,</p>
            <p className="paragraph">ich bin Sebastian und komme aus dem schönen Siebengebirge im Rheinland. Ich arbeite als Software Entwickler in Bonn mit einem Fokus auf Web Frontends.</p>
            <p className="paragraph">Meine Leidenschaft für die Web Entwicklung entdeckte ich bereits zu Schulzeiten. Den Anfang machten statische Websites auf Basis von <em>HTML</em> und <em>CSS</em>. Kurze Zeit später folgten dann dynamische Websites auf Basis von <em>PHP</em> und <em>MySQL</em> Datenbanken. In dieser Zeit beschäftigte ich mich intensiv mit der Umsetzung von <em>Content Mangagement Systemen</em> (CMS).</p>
            <p className="paragraph">Diese Leidenschaft führte mich zu meinem Informatik-Studium mit dem Schwerpunkt <em>Software  Engineering</em> an der TU Kaiserslautern. Während meines Studiums beschäftigte ich mich verstärkt mit <em>Java</em>. Dabei blieb ich der Web Entwicklung treu, unter anderem mit meiner Bachelor- und Masterarbeit über die deklarative Beschreibung von Formularen und deren Generierung auf Basis von Web Technologien.</p>
            <p className="paragraph">Seit Abschluss meines Studiums arbeite ich als <em>Frontend Entwickler</em> im Bereich Data Analysis. Dabei kommen vor allem <em>TypeScript</em>, HTML und CSS zum Einsatz, aber auch <em>C#</em>.</p>
            <p className="paragraph">In meiner Freizeit bin ich gerne sportlich aktiv und gehe gerne einerweiteren Leidenschaft nach, der Fotografie.</p>
          </Container>
        </Section>      
      </Layout>
    );
  }  
}