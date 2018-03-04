import * as React from 'react'
import Link from 'gatsby-link'

export default class extends React.Component
{
  public render() {
    return (
      <>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Impressum</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            An dieser Stelle folgt das Impressum
          </div>
        </section>
      </>
    )
  }
}
