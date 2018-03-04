import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import "./index.scss";

const Header = () => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={{ transform: "translateY(0px)" }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <strong>foxable</strong>
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
        {this.props.children()}
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p><strong>foxable</strong> by Sebastian Fuchs</p>
              <p><Link to="/impressum">Impressum</Link></p>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default DefaultLayout
