import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import "../css/bulma.css";

const Header = () => (
  <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation" style={{ transform: "translateY(0px)" }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item title">
          foxable.net
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
        </div>
      </div>
    </div>    
  </nav>
)

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="foxable.net"
        />
        <Header />
        <section className="section">
          <div className="container">
            {this.props.children()}
          </div>
        </section>
      </div>
    )
  }
}

export default DefaultLayout
