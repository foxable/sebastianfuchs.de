import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import "./index.scss";

const Header = () => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={{ transform: "translateY(0px)" }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <strong>foxable.net</strong>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item" activeClassName="is-active">Home</Link>
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
      <>
        <Helmet
          title="foxable.net"
        />
        <Header />
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Home</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {this.props.children()}
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <strong>foxable.net</strong> by Sebastian Fuchs
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default DefaultLayout
