import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import './layout.css'

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
          <a class="footer__email" href="mailto:hello@teoremo.com">Email</a>
          <a class="footer__linkedin" href="http://www.linkedin.com/in/teoremo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br/>
            <i class="footer__love-text">Made with love, from scratch</i>
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
