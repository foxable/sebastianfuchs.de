import React from 'react'
import {
  Section,
  Container,
  Hero,
  HeroBody,
  Title,
  Subtitle
} from 'bloomer';

import Layout from '../components/layout'

export default class IndexPage extends React.Component<{}, {}>
{
  public render(): JSX.Element
  {
    return (
      <Layout>
        <Hero isColor="light">
          <HeroBody>
            <Container>
              <Title>Impressum</Title>
            </Container>            
          </HeroBody>
        </Hero>
        <Section>
          <Container>
            <Subtitle>Angaben gem&auml;&szlig; &sect; 5 TMG</Subtitle>
            <p>Sebastian Fuchs<br />
            Siegburger Str. 121<br />
            53229 Bonn</p>
          </Container>
        </Section>
        <Section>
          <Container>
            <Subtitle isSize={4}>Kontakt</Subtitle>
            <p>Telefon: +49 (0) 160 106 25 25<br />
            E-Mail: foxable@mailbox.org</p>
          </Container>
        </Section>
        <Section>
          <Container>
            <Subtitle tag="h3">Haftung f&uuml;r Inhalte</Subtitle>
            <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p>
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </Container>
        </Section>
        <Section>
          <Container>
            <Subtitle tag="h3">Haftung f&uuml;r Links</Subtitle>
            <p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
            <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          </Container>
        </Section>
        <Section>
          <Container>
            <Subtitle tag="h3">Urheberrecht</Subtitle>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

            <p style={ { marginTop: "3rem" } }>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>   
          </Container>          
        </Section>    
      </Layout>
    );
  }  
}