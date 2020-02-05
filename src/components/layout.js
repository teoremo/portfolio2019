import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="layout">
          <main>{children}</main>
          <footer class="footer">
          <a
              className="footer__twitter"
              href="http://www.twitter.com/teoremo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="footer__linkedin"
              href="http://www.linkedin.com/in/teoremo"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="footer__email" href="mailto:hello@teoremo.com">
              Email
            </a>
            <br />
            <i className="footer__love-text">Made with love, from scratch</i>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
