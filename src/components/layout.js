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
          <div>
          <main>{children}</main>
          <footer class="footer">
            <a class="footer-email" href=" ">Email</a>
            <a class="footer-linkedin" href=" ">LinkedIn</a>
            <br/>
            <i class="love">Made with love, from scratch</i>
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
